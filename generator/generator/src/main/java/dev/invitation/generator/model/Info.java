package dev.invitation.generator.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;


@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@RequiredArgsConstructor
public class Info {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(name = "m_name")
    private String mName;
    @Column(name = "m_father_name")
    private String mFatherName;
    @Column(name = "m_mother_name")
    private String mMotherName;
    @Column(name = "m_account")
    private String mAccount;
    @Column(name = "m_phone")
    private String mPhone;
    @Column(name = "f_name")
    private String fName;
    @Column(name = "f_father_name")
    private String fFatherName;
    @Column(name = "f_mother_name")
    private String fMotherName;
    @Column(name = "f_account")
    private String fAccount;
    @Column(name = "f_phone")
    private String fPhone;
    @Column(name = "location")
    private String location;
    @Column(name = "dateTime")
    private LocalDateTime dateTime;

}