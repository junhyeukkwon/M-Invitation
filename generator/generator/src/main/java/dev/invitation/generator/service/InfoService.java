package dev.invitation.generator.service;

import dev.invitation.generator.model.Info;

import java.util.List;
import java.util.Optional;

public interface InfoService {
    List<Info> findAll();

    Long getLastId();

    Info save(Info info);

    Optional<Info> findById(Long id);



}
