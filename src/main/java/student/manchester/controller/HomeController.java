package student.manchester.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import student.manchester.annotation.Auth;
import student.manchester.configuration.security.wrapper.JWTUserDetails;

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

    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String loginPage() {
        return "index";
    }

    @RequestMapping(value = "/signUp", method = RequestMethod.GET)
    public String SignUpPage() {
        return "index";
    }

}
