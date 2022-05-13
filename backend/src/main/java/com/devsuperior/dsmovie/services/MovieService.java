package com.devsuperior.dsmovie.services;

import com.devsuperior.dsmovie.repositories.MovieRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.dto.MovieDTO;
import com.devsuperior.dsmovie.entities.Movie;


@Service
public class MovieService {
    
    @Autowired
    private MovieRepository repository;

    @Transactional(readOnly = true)
    public Page<MovieDTO> findAll(Pageable pageable){  // porque nós não vamos exibir todos os filmes de uma vez, apenas alguns por página.
        Page<Movie> result = repository.findAll(pageable);   // o retorno do repository findAll vai ser uma entidade Movie

        // para converter a entidade em objeto simples
        Page<MovieDTO> page = result.map(x -> new MovieDTO(x));  // map aplica uma função a cada elemento da lista(que no caso está em result), então cada elemento da lista vai se tornar um novo objeto de MovieDTO
        
        return page;
    }

    @Transactional(readOnly = true)
    public MovieDTO findByID(Long id){  
        Movie result = repository.findById(id).get(); // o findById retorna um objeto optional, pra pegar o objeto Movie dentro dele é necessário usar o get()

        // converter a entidade em objeto simples
        MovieDTO dto = new MovieDTO(result); // porque o MovieDTO tem um construtor em que ele recebe a entidade como parâmetro
        
        return dto;        
    }

}
