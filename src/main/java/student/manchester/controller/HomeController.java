package student.manchester.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import student.manchester.annotation.Auth;
import student.manchester.api.exception.ApiInputException;
import student.manchester.configuration.security.wrapper.JWTUserDetails;
import student.manchester.controller.bean.AuthenticationForm;
import student.manchester.model.auth.bean.UserDTO;
import student.manchester.service.auth.AuthenticationService;
import student.manchester.service.auth.UserService;

import static org.springframework.http.MediaType.APPLICATION_JSON_VALUE;

/**
 * @author Anastas Anastasov
 * on 10/10/2018.
 */
@Controller
public class HomeController {

    @RequestMapping(value = "/", method = RequestMethod.GET)
    public String home(final @Auth JWTUserDetails userDetails) {
        return "redirect:/home";
    }

    @RequestMapping(value = "/home", method = RequestMethod.GET)
    public String homePage() {
        return "index";
    }

    @RequestMapping(value = "/profile", method = RequestMethod.GET)
    public String profilePage() {
        return "index";
    }

    @RequestMapping(value = "/contacts", method = RequestMethod.GET)
    public String contactsPage() {
        return "index";
    }

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String loginPage() {
        return "index";
    }

    @RequestMapping(value = "/signUp", method = RequestMethod.GET)
    public String SignUpPage() {
        return "index";
    }

}
