package com.devsuperior.dsmovie.entities;


import java.util.HashSet;
import java.util.Set;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;



@Entity
@Table(name = "tb_movie")
public class Movie {

    // por padrão colocamos os atributos de um model privados e com tipos de classe
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private Double score;
    private Integer count;
    private String image;


    @OneToMany(mappedBy = "id.movie") // um filme para várias avaliações. Esse mappedBy indica qual coluna vai determinar a coleção dentro da tabela scores. O o id do filme tá localizado em scores pelo id e dentro do id (no ScorePK) no movie, por isso id.movie
    private Set<Score> scores = new HashSet<>();  // criando uma referência para a coleção de todas as avaliações de um certo filme. A coleção set é uma interface, se instancia uma interface chamando uma classe responsável por instanciar essa interface.



    // Constructors
    public Movie() {

    }

    public Movie(Long id, String title, Double score, Integer count, String image) {
        this.id = id;
        this.title = title;
        this.score = score;
        this.count = count;
        this.image = image;
    }


    // Getters & setters
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public Double getScore() {
        return score;
    }

    public void setScore(Double score) {
        this.score = score;
    }

    public Integer getCount() {
        return count;
    }

    public void setCount(Integer count) {
        this.count = count;
    }

    public String getImage() {
        return image;
    }

    public void setImage(String image) {
        this.image = image;
    }

    public Set<Score> getScores() {
        return scores;
    }

    public void setScores(Set<Score> scores) {
        this.scores = scores;
    }

}
