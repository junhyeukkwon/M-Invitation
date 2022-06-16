package dev.invitation.generator.service;

import dev.invitation.generator.model.Images;
import dev.invitation.generator.repository.ImagesRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ImagesServiceImpl implements ImagesService {
    @Autowired
    private ImagesRepository imagesRepository;


    @Override
    public List<Images> findAll() {
        System.out.println(imagesRepository.findAll());
        return imagesRepository.findAll();
    }

    @Override
    public Images save(Images images) {
        return imagesRepository.save(images);
    }
    //마지막 해쉬값을 가져오는 매서드
    @Override
    public List<Images> findAllByhash(String h) {
        Images image = imagesRepository.findTop1ByOrderByImageidDesc();
        String hashValue = image.getHashValue();
        System.out.println(hashValue);
        return imagesRepository.findImagesByhashValue(hashValue);
    }


}
