package dev.invitation.generator.service;

import dev.invitation.generator.model.Info;
import org.springframework.stereotype.Service;

import java.util.List;
public interface GenService {
    List<Info> findAll();
}
