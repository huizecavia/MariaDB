package com.matthijs.spring.mariadb.controller;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="tuin")
public class Tuin {

    @Id
    @Column(name="id")
    private int volgnummer;

    @Column(name="plant")
    private String plant;

    @Column(name="onderhoud")
    private String onderhoud;

    public String getPlant() {
        return plant;
    }

    public String getOnderhoud() {
        return onderhoud;
    }
}
