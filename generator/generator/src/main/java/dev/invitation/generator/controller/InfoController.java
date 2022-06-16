package dev.invitation.generator.controller;

import dev.invitation.generator.model.Info;
import dev.invitation.generator.service.InfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("api/info") // localhost:8080/api/v1까지 작성해야 todocontroller에 접근할 수 있음. baseUrl임
@CrossOrigin("*")
public class InfoController {
    @Autowired
    private InfoService infoService;

    //info Table 전체 조회
    @GetMapping
    public List<Info> findAll() {
        System.out.println("findAll() called");
        return infoService.findAll();
    }

    @PostMapping
    public Info save(@RequestBody Info info) {
        System.out.println(info);
        return infoService.save(info);
    }

}
