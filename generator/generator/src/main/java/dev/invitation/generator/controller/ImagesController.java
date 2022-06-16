package dev.invitation.generator.controller;
import dev.invitation.generator.model.Images;
import dev.invitation.generator.model.Info;
import dev.invitation.generator.service.ImagesService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/images") // localhost:8080/api/v1까지 작성해야 todocontroller에 접근할 수 있음. baseUrl임
@CrossOrigin("*")
public class ImagesController {
    @Autowired
    private ImagesService imagesService;

    @GetMapping
    public List<Images> findAll() {
        System.out.println("findAll() called");
        return imagesService.findAll();
    }

    @GetMapping("/hash")
    public List<Images> findAllByhash(@RequestParam String h) {
        return imagesService.findAllByhash(h);
    }

    @PostMapping
    public Images save(@RequestBody Images image) {
        System.out.println(image);
        return imagesService.save(image);
    }

}