package student.manchester.service.auth.impl;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import student.manchester.configuration.security.exception.RejectedTokenException;
import student.manchester.configuration.security.exception.TokenSecretNotConfiguredException;
import student.manchester.model.auth.bean.RoleDTO;
import student.manchester.model.auth.bean.UserDTO;
import student.manchester.service.auth.UserService;
import student.manchester.util.TimeUtil;

import java.util.Map;
import java.util.Optional;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
@Component
public class JWTTokenizer {

    @Autowired
    private UserService userService;

    public static final String JWT_SECRET_VAR_NAME = "UI_DESERIALIZAER";

    public Long getIdFromToken(final String token) {
        UserDTO userDTO = new UserDTO();
        try {
            final Claims tokenBody = Jwts.parser()
                    .setSigningKey(getSecret())
                    .parseClaimsJws(token)
                    .getBody();
            userDTO = mapTokenToDTO(tokenBody);
        } catch (final Exception ex) {
            // return empty
        }
        return userDTO.getId();
    }

    public UserDTO validate(final String token) {
        final UserDTO userDTO;
        try {
            final Claims tokenBody = Jwts.parser()
                    .setSigningKey(getSecret())
                    .parseClaimsJws(token)
                    .getBody();
            userDTO = userService.findById(Long.valueOf(tokenBody.getId()));
            if(userDTO.getLastAuthLogout() != null
                    && tokenBody.getIssuedAt().before(userDTO.getLastAuthLogout())) {
                throw new RejectedTokenException("Authentication details have changed since last login."
                        + "Please login again.");
            }
        } catch (final Exception ex) {
            throw new RejectedTokenException("The token :" + token + " couldn't be verified.", ex);
        }

        return userDTO;
    }

    private UserDTO mapTokenToDTO(final Claims tokenBody) {
        final UserDTO userDTO = new UserDTO();
        userDTO.setEmail(tokenBody.getSubject());
        userDTO.setId(Long.valueOf(tokenBody.getId()));
        userDTO.setRole(getRoleFromToken(tokenBody));
        return userDTO;
    }

    private RoleDTO getRoleFromToken(final Claims tokenBody) {
        final RoleDTO roleDTO = new RoleDTO();
        @SuppressWarnings("unchecked")
        final Map<String, Object> role = (Map<String, Object>) tokenBody.get("role");
        roleDTO.setName(String.valueOf(role.getOrDefault("name", "")));
        return roleDTO;
    }

    public String generate(final UserDTO user) {
        final Claims authInfo = Jwts.claims()
                .setSubject(user.getEmail());
        authInfo.setId(String.valueOf(user.getId()));
        authInfo.put("role", user.getRole());
        return Jwts.builder()
                .setClaims(authInfo)
                .signWith(SignatureAlgorithm.HS256, getSecret())
                .setExpiration(TimeUtil.next(getTokenExpirationTime()))
                .compact();
    }

    private String getSecret(){
        final Optional<String> authDuration = Optional.of(System.getenv(JWT_SECRET_VAR_NAME));
        return  authDuration.orElseThrow(() ->
                new TokenSecretNotConfiguredException("Environment variable [" + JWT_SECRET_VAR_NAME + "] is not set.")
        );
    }

    public String getTokenExpirationTime() {
        final Optional<String> authDuration = Optional.of(System.getenv("AUTH_DURATION"));
        return  authDuration.orElse("0s");
    }
}
