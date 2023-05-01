#language: pt

@Login
Funcionalidade: Tela de login

  @Login_Sucesso
  Cenário: Login com sucesso
    Dado que eu entre na tela de login
    Quando eu informo "testeqa@hotmail.com" e "teste12345"
    E clico no botão Sign In
    Entao valido o nome do usuário "Teste QA"
