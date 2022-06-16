package dev.invitation.generator.controller;

import dev.invitation.generator.model.Info;
import dev.invitation.generator.service.InfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/info") // localhost:8080/api/v1까지 작성해야 todocontroller에 접근할 수 있음. baseUrl임
@CrossOrigin("*")
public class InfoController {
    @Autowired
    private InfoService infoService;

    @GetMapping
    public List<Info> findAll() {
        System.out.println("findAll() called");
        return infoService.findAll();
    }


    @PostMapping
    public Info save(Info info) {
        System.out.println(info);

        return infoService.save(info);
    }

//
//    @PutMapping // putmapping 아님 제발
//    public Long getLastId() {
//        System.out.println("getLastId() called");
//        return infoService.getLastId();
//    }
}
