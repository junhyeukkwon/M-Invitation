package dev.invitation.generator.model;

import javax.persistence.*;

@Entity
public class Images {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "image_id")
    private Long imageId;
    private String link;
    @ManyToOne
    @JoinColumn(name="info_id")
    private Info info;
}
