package com.matthijs.spring.mariadb.controller;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;

@Controller
public class OnderhoudController {

    @GetMapping("/iets")
    public String getIets() {
        return "iets";
    }
}
