package dev.invitation.generator.service;



import dev.invitation.generator.model.Info;
import dev.invitation.generator.repository.InfoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class InfoServiceImpl implements InfoService {
    @Autowired
    private InfoRepository infoRepository;

    @Override
    public List<Info> findAll() {
        return infoRepository.findAll();
    }
}
