package com.devsuperior.dsmovie.entities;


import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;

// import org.springframework.beans.factory.annotation.Autowired;

@Entity
@Table(name = "tb_score")
public class Score {

    // @Autowired
    @EmbeddedId   // pra indicar que essa chave primária é composta
    private ScorePK id = new ScorePK();  // no lugar de movie_id e users_id a gente coloca um só atributo que carrega os dois
    private Double value;

    public Score(){

    }

    // para associar um filme e um usuário a um score

    public void setMovie(Movie movie){
        id.setMovie(movie);     // setar o movie passado como argumento usando o setMovie dentro do id(vindo da classe ScorePK)
    }

    public void setUser(User user){
        id.setUser(user);
    }

    public ScorePK getId() {
        return id;
    }

    public void setId(ScorePK id) {
        this.id = id;
    }

    public Double getValue() {
        return value;
    }

    public void setValue(Double value) {
        this.value = value;
    }

    

}
