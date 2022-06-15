package dev.invitation.generator.repository;


import dev.invitation.generator.model.Info;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.RepositoryDefinition;
import org.springframework.stereotype.Repository;

//@RepositoryDefinition(domainClass = Images.class, idClass = Long.class)
//public interface ImagesRepository extends CrudRepository<Images, Long> {
@Repository
public interface GenRepository extends JpaRepository<Info, Long> {
}
