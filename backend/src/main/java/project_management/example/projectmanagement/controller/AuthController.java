package project_management.example.projectmanagement.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import project_management.example.projectmanagement.dto.auth.CredentialResponse;
import project_management.example.projectmanagement.dto.auth.LoginRequest;
import project_management.example.projectmanagement.dto.auth.RegisterRequest;
import project_management.example.projectmanagement.entity.User;
import project_management.example.projectmanagement.service.user.UserService;
import project_management.example.projectmanagement.util.JwtUtil;


@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:3000")
public class AuthController {

    private final UserService userService;
    private final JwtUtil jwtUtil;


    public AuthController(UserService userService, JwtUtil jwtUtil) {
        this.userService = userService;
        this.jwtUtil = jwtUtil;
    }

    @PostMapping("/register")
    public ResponseEntity<?> registerUser(@RequestBody RegisterRequest request) {
        try {
            userService.registerUser(request.getEmail(), request.getPassword());
            Map<String, String> response = new HashMap<>();
            response.put("message", "Register Success !!");

            return ResponseEntity.status(HttpStatus.CREATED).body(response);

        } catch (RuntimeException e) {
            Map<String, String> errors = new HashMap<>();
            errors.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(errors);
        }
    }

    @PostMapping("/login")
    public ResponseEntity<?> loginUser(@RequestBody LoginRequest request) {
        try {
            User loginUser = userService.loginUser(request.getEmail(), request.getPassword());
            String token = jwtUtil.generateToken(loginUser.getEmail());
            String role = loginUser.getRole();

            return ResponseEntity.ok(new CredentialResponse(loginUser.getEmail(), token, role));

        } catch (RuntimeException e) {
            Map<String, String> error = new HashMap<>();
            error.put("message", e.getMessage());
            return ResponseEntity.badRequest().body(error);
        }
    }
}
