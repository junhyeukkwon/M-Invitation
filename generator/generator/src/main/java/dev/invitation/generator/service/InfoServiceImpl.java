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

    @Override
    public Long getLastId() {
        Long id = Long.valueOf(0);
        final List<Info> infos = infoRepository.findAll(); //NullPointer 예외를 방지하기 위함
        return Long.valueOf(infos.size());
    }

    @Override
    public Info save(Info info) {
        return infoRepository.save(info);
    }
}
