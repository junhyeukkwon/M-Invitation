package dev.invitation.generator.service;

import dev.invitation.generator.model.Generator;
import org.springframework.stereotype.Service;

import java.util.List;
public interface GenService {
    List<Generator> findAll();
}
