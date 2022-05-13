package com.devsuperior.dsmovie.services;

import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.dto.ScoreDTO;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.entities.Score;
import com.devsuperior.dsmovie.entities.User;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import com.devsuperior.dsmovie.repositories.ScoreRepository;
import com.devsuperior.dsmovie.repositories.UserRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;



@Service
public class ScoreService {
    
    // vamos precisar dos três repositórios, pois salvar uma avaliação requer ação nas três tabelas
    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private ScoreRepository scoreRepository;

    @Transactional
    public MovieDTO saveScore(ScoreDTO dto){  // primeiro vamos pegar as o id do filme, id do usuário e 

        User user = userRepository.findByEmail(dto.getEmail());   // busca o usuário pelo email

        if (user == null){    // se o usuário não tiver cadastrado
            user = new User();  
            user.setEmail(dto.getEmail());
            userRepository.saveAndFlush(user);   // cria um novo. Esse saveAndFlush garante que teremos acesso ao objeto atualizado nas próximas operações
        }

        Movie movie = movieRepository.findById(dto.getMovieId()).get();
        
        Score score = new Score();
        score.setMovie(movie);
        score.setUser(user);
        score.setValue(dto.getScore());

        score = scoreRepository.saveAndFlush(score);    // salvamos a avaliação do usuário. Agora precisamos atualizar as informações do filme, ou seja, recalcular a média a partir da nova avaliação


        double sum = 0.0;
        for (Score s : movie.getScores()){   // para cada score dentro da coleção de scores desse filme
            sum += s.getValue();    // a soma vai receber o valor de cada score
        }

        // agora sum representa a soma de todas as notas. A média é a soma dividida pela quantidade. A quantidade é o tamanho da coleção de scores de um filme

        double avg = sum/movie.getScores().size(); // size é um método que pega o tamanho da coleção

        movie.setCount(movie.getScores().size());  // atualizando a quantidade de avaliações de um filme
        movie.setScore(avg);   // atualizando a média


        // salvando todas as atualizações do filme
        movie = movieRepository.save(movie);

        MovieDTO movieDTO = new MovieDTO(movie);
        return movieDTO;
    }



    

}
