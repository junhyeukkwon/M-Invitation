package dev.invitation.generator.repository;


import dev.invitation.generator.model.Images;
import dev.invitation.generator.model.Info;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.RepositoryDefinition;
import org.springframework.stereotype.Repository;

import java.util.List;

//@RepositoryDefinition(domainClass = Images.class, idClass = Long.class)
//public interface ImagesRepository extends CrudRepository<Images, Long> {
@Repository
public interface ImagesRepository extends JpaRepository<Images, Long> {


    List<Images> findAll();

    List<Images> findImagesByhashValue(String h);

    Images findTop1ByOrderByImageidDesc();
}
