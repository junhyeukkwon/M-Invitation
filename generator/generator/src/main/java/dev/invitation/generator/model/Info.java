package dev.invitation.generator.model;

import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;


@Entity
@Getter
@Setter
@ToString
@AllArgsConstructor
@NoArgsConstructor
public class Info {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String mName;
    private String mFatherName;
    private String mMotherName;
    private String mAccount;
    private String mPhone;
    private String fName;
    private String fFatherName;
    private String fMotherName;
    private String fAccount;
    private String fPhone;
    private String location;
    private LocalDateTime dateTime;
    private String hashValue;



}