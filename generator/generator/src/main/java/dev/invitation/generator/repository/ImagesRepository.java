package dev.invitation.generator.repository;


import dev.invitation.generator.model.Images;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ImagesRepository extends JpaRepository<Images, Long> {

    List<Images> findAll();

    List<Images> findImagesByhashValue(String h);

    Images findTop1ByOrderByImageidDesc();
}
