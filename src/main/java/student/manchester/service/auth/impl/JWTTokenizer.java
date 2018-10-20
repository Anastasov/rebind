package student.manchester.service.auth.impl;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.stereotype.Component;
import student.manchester.configuration.security.exception.InvalidTokenException;
import student.manchester.configuration.security.exception.RejectedTokenException;
import student.manchester.model.auth.bean.RoleDTO;
import student.manchester.model.auth.bean.UserDTO;

import java.util.Map;

/**
 * @author Anastas Anastasov
 * on 10/19/2018.
 */
@Component
public class JWTTokenizer {

    private static final String SECRET = System.getenv("UI_DESERIALIZAER");

    public UserDTO validate(final String token) {
        final UserDTO userDTO;
        try {
            final Claims tokenBody = Jwts.parser()
                    .setSigningKey(getSecret())
                    .parseClaimsJws(token)
                    .getBody();
            userDTO = mapTokenToDTO(tokenBody);
            // Is tokenBody.getIssuedAt() > last pass change ? ok : NOT_AUTHORIZED
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
                .compact();
    }

    private String getSecret(){
        return System.getenv("UI_DESERIALIZAER");
    }
}
