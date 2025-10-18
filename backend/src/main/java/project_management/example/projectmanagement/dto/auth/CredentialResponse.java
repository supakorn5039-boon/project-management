package project_management.example.projectmanagement.dto.auth;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class CredentialResponse {
    private String email;
    private String token;
    private String role;
}
