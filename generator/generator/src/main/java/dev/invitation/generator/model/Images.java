package dev.invitation.generator.model;


import lombok.*;

import javax.persistence.*;

@Entity
@Setter
@Getter
@AllArgsConstructor
@NoArgsConstructor
public class Images {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="image_id")
    private Long imageid;
    private String link;
    //    @ManyToOne(cascade = CascadeType.ALL)
//    @JoinColumn(name="info_id", foreignKey = @ForeignKey(name = "id"))
//    private Info info;
    private String hashValue;

//    @Override
//    public String toString() {
//        return "Images{" +
//                "imageid=" + imageid +
//                ", link='" + link + '\'' +
//                ", info=" + info +
//                '}';
//    }
}
