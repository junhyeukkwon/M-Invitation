package dev.invitation.generator.controller;

import dev.invitation.generator.model.Images;
import dev.invitation.generator.service.GenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/generator") // localhost:8080/api/v1까지 작성해야 todocontroller에 접근할 수 있음. baseUrl임
@CrossOrigin("*")
public class GenController {
    @Autowired
    private GenService genService;

    @GetMapping
    public List<Images> findAll() {
        System.out.println("findAll() called");
        return genService.findAll();
    }
}
