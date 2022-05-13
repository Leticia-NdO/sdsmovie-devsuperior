package com.devsuperior.dsmovie.entities;

import java.io.Serializable;

import javax.persistence.Embeddable;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Embeddable
public class ScorePK implements Serializable {  // Serializable é uma interface do Java que indica que objetos desse tipo podem ser convertidos para bytes, para que ele possa trafegar na rede e ser salvo em arquivos

    // em uma tabela auxiliar, as chaves estrangeiras representam a chave primária dessa tabela, ou seja, é uma chave primária composta. No java, a gente precisa criar uma classe auxiliar que armazenará esses dois valores e depois usá-la como chave primária na tabela auxiliar
    
    @ManyToOne   // muitas avaliações para um filme
    @JoinColumn(name = "movie_id")  // indica que é uma columa com chave estrangeira
    private Movie movie;

    @ManyToOne  // muitos usuários avaliando um filme
    @JoinColumn(name = "user_id")
    private User user;
    
    
    public ScorePK() {
    }
    public Movie getMovie() {
        return movie;
    }
    public void setMovie(Movie movie) {
        this.movie = movie;
    }
    public User getUser() {
        return user;
    }
    public void setUser(User user) {
        this.user = user;
    }

    
}
