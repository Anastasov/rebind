package student.manchester.service.bind;

import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import student.manchester.api.common.exception.ApiInputException;
import student.manchester.model.bind.dto.BindDTO;

import java.util.Optional;

/**
 * @author Anastas Anastasov
 * on 2/18/2019.
 */
@Component
public class BindValidator {

    public void validate(final BindDTO bind) {
        validateName(Optional.ofNullable(bind.getName()).orElse(""));
        validateUrl(Optional.ofNullable(bind.getUrl()).orElse(""));
        validateIcon(Optional.ofNullable(bind.getIcon()).orElse(""));
    }

    public void validateName(final String bindName) {
        if(StringUtils.isEmpty(bindName)) {
            throw new ApiInputException.Builder()
                    .addError("name", "Invalid Name.")
                    .build();
        }
    }

    public void validateUrl(final String bindUrl) {
        if(StringUtils.isEmpty(bindUrl)) {
            throw new ApiInputException.Builder()
                    .addError("url", "Invalid Name.")
                    .build();
        }
    }

    public void validateIcon(final String bindIcon) {
        if(StringUtils.isEmpty(bindIcon)) {
            throw new ApiInputException.Builder()
                    .addError("icon", "Invalid Name.")
                    .build();
        }
    }
}
