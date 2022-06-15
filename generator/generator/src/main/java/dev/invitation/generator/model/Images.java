package dev.invitation.generator.model;

import javax.persistence.*;

@Entity
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="image_id")
    private Long imageid;
    private String link;
    @ManyToOne
    @JoinColumn(name="inforid")
    private Info info;

}
