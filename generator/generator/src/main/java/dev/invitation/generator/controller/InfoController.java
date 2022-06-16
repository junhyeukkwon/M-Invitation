package dev.invitation.generator.controller;

import dev.invitation.generator.model.Info;
import dev.invitation.generator.service.InfoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

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


    //info id값에 해당하는 레코드 조회
    @GetMapping("/{id}") //post로 id 숨기고 hidden으로 id 받아오게 하는 방법은 어떨까?
    public Optional<Info> findById(@PathVariable("id") Long id) {
        return infoService.findById(id);
    }

    //info 입력 값 저장
    @PostMapping
    public Info save(@RequestBody Info info) {
        System.out.println(info);
        return infoService.save(info);
    }


//
//    @PutMapping // putmapping 아님 제발
//    public Long getLastId() {
//        System.out.println("getLastId() called");
//        return infoService.getLastId();
//    }

    //info 수정
//    @PutMapping
//    public Info updateInfo(@RequestBody Info info){
//        return infoService.update(info);
//    }

}
