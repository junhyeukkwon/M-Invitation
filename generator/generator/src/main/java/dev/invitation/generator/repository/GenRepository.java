package dev.invitation.generator.repository;


import dev.invitation.generator.model.Generator;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface GenRepository extends JpaRepository<Generator, Long> {
}
