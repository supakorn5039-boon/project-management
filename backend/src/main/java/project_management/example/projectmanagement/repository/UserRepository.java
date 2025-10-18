package project_management.example.projectmanagement.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import project_management.example.projectmanagement.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}
