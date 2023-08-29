package thymeleaf.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OnderhoudController {

    @GetMapping
    public String getIets(Model model) {
        model.addAttribute("Kempten", "Straight Outta Controller");
        return "iets";
    }
}
