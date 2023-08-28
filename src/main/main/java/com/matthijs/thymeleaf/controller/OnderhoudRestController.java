package com.matthijs.thymeleaf.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OnderhoudRestController {

    @GetMapping("/api")
    public String getOnderhoud() {
        return "Hello World";
    }
}
