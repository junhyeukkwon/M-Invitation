package dev.invitation.generator.service;

import dev.invitation.generator.model.Images;

import java.util.List;

public interface ImagesService {
    List<Images> findAll();

    Images save(Images image);

    List<Images> findAllByhash();
}
