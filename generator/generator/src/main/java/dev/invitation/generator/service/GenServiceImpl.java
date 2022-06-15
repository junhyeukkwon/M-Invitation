package dev.invitation.generator.service;

import dev.invitation.generator.model.Info;
import dev.invitation.generator.repository.InfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class GenServiceImpl implements GenService {
    @Autowired
    private InfoRepository InfoRepository;

    @Override

    public List<Info> findAll() {
        return InfoRepository.findAll();

    }
}
