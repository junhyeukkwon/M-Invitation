package dev.invitation.generator.service;

import dev.invitation.generator.model.Images;
import dev.invitation.generator.repository.GenRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenServiceImpl implements GenService {
    @Autowired
    private GenRepository genRepository;

    @Override
    public List<Images> findAll() {
        return genRepository.findAll();
    }
}
