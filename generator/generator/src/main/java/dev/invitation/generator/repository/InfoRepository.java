package dev.invitation.generator.repository;

import dev.invitation.generator.model.Info;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;


import java.util.List;
import java.util.Optional;

@Repository
public interface InfoRepository extends JpaRepository<Info, Long> {
    List<Info> findAll();

    Optional<Info> findById(@Param("id") Long id);

}