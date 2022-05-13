package com.devsuperior.dsmovie.repositories;

import com.devsuperior.dsmovie.entities.User;

import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

    // vamos criar um método personalizado para buscar um usuário por email

    User findByEmail(String email);   // é padrão do Spring Data JPA poder fazer uma busca com o nome da coluna na tabela

}
