#language: pt

@Login
Funcionalidade: Tela de login

  @LoginValido
  Cenário: Login com sucesso
    Dado que eu entre na tela de login
    Quando eu informo "testeqa@hotmail.com" e "teste12345"
    E clico no botão Sign In
    Entao valido o nome do usuário "Teste QA"

  @LoginInvalido
  Cenário: Login invalido
    Dado que eu entre na tela de login
    Quando eu informo "testeqa@hotmail.com" e "invalido99"
    E clico no botão Sign In
    Entao é exibido "Login incorreto"
