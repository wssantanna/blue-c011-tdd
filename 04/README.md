# Teste de integração

## Testando endpoint

### Status

### Retorno do corpo

### Configurações

- [ ] **POST** Autenticar
    - Testar os status
        - 200 OK
        - 401 Unauthorized
    - Testar o corpo do retorno
        - Token + Usuário

- [ ] **POST** Cadastrar
    - Testar os status
        - 201 Created
        - 400 Bad Request
        - 409 Conflict
    - Testar o corpo do retorno
        - Token + Usuário

- [ ] **GET** Usuario
    - Testar os status
        - 200 OK
        - 404 Not Found
    - Testar o corpo do retorno
        - Token + Usuário 

- [ ] **PUT** Usuario
    - Testar os status
        - 200 OK
        - 400 Bad Request
