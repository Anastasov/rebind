package student.manchester.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import student.manchester.controller.bean.AuthenticationForm;
import student.manchester.controller.bean.AuthenticationResponse;
import student.manchester.model.auth.bean.UserDTO;
import student.manchester.service.auth.UserService;
import student.manchester.service.auth.impl.JWTTokenizer;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * @author Anastas Anastasov
 * on 10/10/2018.
 */
@Controller
public class HomeController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home() {
        return "index";
    }

    @Autowired
    private UserService userService;

    @Autowired
    private JWTTokenizer tokenizer;

    /* ----------------------- NO AUTHORIZATION REQUIRED ----------------------- */
    @RequestMapping(value = "/signUp", method = RequestMethod.POST,
            consumes=APPLICATION_JSON_VALUE, produces=APPLICATION_JSON_VALUE)
    public ResponseEntity<AuthenticationResponse> signUp(@RequestBody final AuthenticationForm authenticationForm) {
        final UserDTO userData = userService
                .createUser(authenticationForm.getUsername(), authenticationForm.getPassword());
        final String token = tokenizer.generate(userData);
        final AuthenticationResponse response = new AuthenticationResponse();
        response.setToken(token);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST,
            consumes=APPLICATION_JSON_VALUE, produces=APPLICATION_JSON_VALUE)
    public ResponseEntity<AuthenticationResponse> login(@RequestBody final AuthenticationForm authenticationForm) {
        final UserDTO userData = userService
                .getUserByCredentials(authenticationForm.getUsername(), authenticationForm.getPassword());
        final String token = tokenizer.generate(userData);
        final AuthenticationResponse response = new AuthenticationResponse();
        response.setToken(token);
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
