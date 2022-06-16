package dev.invitation.generator.model;


import lombok.Getter;
import lombok.Setter;


import javax.persistence.*;

@Entity
@Setter
@Getter
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="image_id")
    private Long imageid;
    private String link;
    @ManyToOne(cascade = CascadeType.ALL)
    @JoinColumn(name="info_id")
    private Info info;

    @Override
    public String toString() {
        return "Images{" +
                "imageid=" + imageid +
                ", link='" + link + '\'' +
                ", info=" + info +
                '}';
    }
}
