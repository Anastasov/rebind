package student.manchester.service.card.impl;

import org.springframework.beans.factory.annotation.Autowired;
import student.manchester.annotation.TransactionalService;
import student.manchester.api.card.bean.CardCreateRequest;
import student.manchester.api.card.bean.CardUpdateRequest;
import student.manchester.dao.card.CardDao;
import student.manchester.dao.user.ProtectedBindDao;
import student.manchester.model.bind.Bind;
import student.manchester.model.bind.ProtectedBind;
import student.manchester.model.bind.dto.ProtectedBindDTO;
import student.manchester.model.card.Card;
import student.manchester.model.card.dto.CardDTO;
import student.manchester.model.user.ProtectedUser;
import student.manchester.model.user.User;
import student.manchester.model.user.dto.ProtectedUserField;
import student.manchester.service.card.CardService;
import student.manchester.service.exception.LogicException;
import student.manchester.service.user.UserService;

import java.util.ArrayList;
import java.util.Collection;
import java.util.Collections;
import java.util.List;
import java.util.Optional;
import java.util.function.Consumer;
import java.util.stream.Collectors;

/**
 * @author Anastas Anastasov
 * on 11/27/2018.
 */
@TransactionalService
public class CardServiceImpl implements CardService {

    @Autowired
    private CardDao cardDao;

    @Autowired
    private UserService userService;

    @Autowired
    private ProtectedBindDao protectedBindDao;

    @Override
    public CardDTO findById(final Long id) {
        final Card card = getRequiredCard(id);
        return new CardDTO(card);
    }

    @Override
    public CardDTO updateCard(final Long id, final CardUpdateRequest input) {
        final Card card = getRequiredCard(id);
        Optional.ofNullable(input.getName()).ifPresent(card::setName);
        Optional.ofNullable(input.getUsernameField())
                .ifPresent(setProtectedField(card.getUser()::setUsernameCheck));
        Optional.ofNullable(input.getEmailField())
                .ifPresent(setProtectedField(card.getUser()::setEmailCheck));
        Optional.ofNullable(input.getFirstNameField())
                .ifPresent(setProtectedField(card.getUser()::setFirstNameCheck));
        Optional.ofNullable(input.getLastNameField())
                .ifPresent(setProtectedField(card.getUser()::setLastNameCheck));
        Optional.ofNullable(input.getPhoneField())
                .ifPresent(setProtectedField(card.getUser()::setPhoneCheck));
        Optional.ofNullable(input.getPostcodeField())
                .ifPresent(setProtectedField(card.getUser()::setPostcodeCheck));
        Optional.ofNullable(input.getBinds())
                .ifPresent(binds -> binds.forEach(this::updateBind));
        return new CardDTO(card);
    }

    private Consumer<ProtectedUserField> setProtectedField(final Consumer<Boolean> setCheck) {
        final Consumer<String> setValue = newValue -> {};
        return protectedUserField -> {
            Optional.ofNullable(protectedUserField.getValue())
                    .ifPresent(setValue);
            Optional.ofNullable(protectedUserField.getHidden())
                    .ifPresent(setCheck);
        };
    }

    private ProtectedBind updateBind(final ProtectedBindDTO bind) {
        final ProtectedBind protectedBind = protectedBindDao.load(bind.getId());
        protectedBind.setBindCheck(bind.getBindCheck());
        return protectedBind;
    }

    @Override
    public CardDTO createCard(final Long userId, final CardCreateRequest input) {
        final Card card = new Card();
        card.setName(input.getName());
        final ProtectedUser protectedUser = userService.createProtectedUser(userId);
        protectedUser.setCard(card);
        card.setUser(protectedUser);
        final Collection<ProtectedBind> binds = protectedUser.getUser().getBinds().stream()
                .map(userService::createProtectedBind)
                .peek(bind -> bind.setCard(card))
                .collect(Collectors.toList());
        card.setProtectedBinds(binds);
        cardDao.save(card);
        return new CardDTO(card);
    }

    @Override
    public boolean deleteCard(final Long id) {
        boolean deletedSuccessfully = true;
        try {
            final Card card = getRequiredCard(id);
            cardDao.delete(card);
        } catch(final Exception ex) {
            deletedSuccessfully = false;
        }
        return deletedSuccessfully;
    }

    @Override
    public List<CardDTO> getCards(final Long userId) {
        final Optional<List<Card>> userCards = Optional.ofNullable(cardDao.getCards(userId));
        return userCards
                .orElseGet(ArrayList::new).stream()
                .map(CardDTO::new)
                .collect(Collectors.toList());
    }

    @SuppressWarnings("unchecked")
    private Card getRequiredCard(final Long id) {
        final Card entity = cardDao.get(id);
        if(entity == null) {
            throw new LogicException("Couldn't find card with id[" + id + "]");
        }
        return entity;
    }
}
