package dev.invitation.generator.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;


@Builder
@RequiredArgsConstructor
@AllArgsConstructor
@Setter
@Getter
@ToString

@Entity
public class Generator {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String description;

}
