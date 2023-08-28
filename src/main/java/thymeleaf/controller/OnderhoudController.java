package thymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OnderhoudController {

    @GetMapping
    public String getIets() {
        return "iets";
    }
}
