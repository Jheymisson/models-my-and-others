package org.example.steps;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Entao;
import io.cucumber.java.pt.Quando;

public class AppTestStep {

    @Dado("que eu entre na tela de login")
    public void que_eu_entre_na_tela_de_login() {
        System.out.println("Tela de Login");
    }

    @Quando("eu informo {string} e {string}")
    public void eu_informo_e(String usuario, String senha) {
        System.out.println("Login:"+usuario);
        System.out.println("Senha:"+senha);
    }

    @Quando("clico no botão Sign In")
    public void clico_no_botão_sign_in() {
        System.out.println("Acionar botão Sign In");
    }

    @Entao("valido o nome do usuário {string}")
    public void valido_o_nome_do_usuário(String usuario) {
        System.out.println("Nome do usuário:"+usuario);
    }

    @Entao("é exibido {string}")
    public void é_exibido(String msg) {
        System.out.println("Mensagem: "+msg);
    }
}
