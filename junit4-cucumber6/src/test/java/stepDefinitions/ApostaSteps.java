package stepDefinitions;

import io.cucumber.java.pt.Dado;
import io.cucumber.java.pt.Então;
import io.cucumber.java.pt.Quando;
import pages.HomeLoteriaPage;
import pages.LoginPage;
import pages.MegaPage;
import pages.TermoDeUsoLoteriaPage;
import utils.BaseTest;

import java.util.Arrays;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

public class ApostaSteps {

    private TermoDeUsoLoteriaPage termoDeUsoLoteriaPage = new TermoDeUsoLoteriaPage(BaseTest.getDriver());
    private HomeLoteriaPage homeLoteriaPage;
    private MegaPage megaPage;
    private LoginPage loginPage;

    @Dado("que estou na tela da loteria online Caixa")
    public void que_estou_na_tela_da_loteria_online_caixa() {
        String url = "https://www.loteriasonline.caixa.gov.br/silce-web/#/termos-de-uso";
        assertThat(termoDeUsoLoteriaPage.validaUrl(), is(url));
    }

    @Dado("aciono o botão que sou maior de dezoito anos")
    public void aciono_o_botão_que_sou_maior_de_dezoito_anos() {
        homeLoteriaPage = termoDeUsoLoteriaPage.acionarBotaoSim();
    }

    @Quando("seleciono a opção mega da virada")
    public void seleciono_a_opção_mega_da_virada() {
        megaPage = homeLoteriaPage.acionarBotaoMegaVirada();
    }

    @Quando("seleciono os números {string}, {string}, {string}, {string}, {string} e {string}")
    public void seleciono_os_números_e(String n1, String n2, String n3, String n4, String n5, String n6) {
        megaPage.selecionaNumeros(Arrays.asList(n1, n2, n3, n4, n5, n6));
    }

    @Quando("aciono o botão Ir Para Pagamento")
    public void aciono_o_botão_ir_para_pagamento() {
        loginPage = megaPage.acionarBotaoPagamento();
    }

    @Então("sou direcionado para a tela de Login na Caixa")
    public void sou_direcionado_para_a_tela_de_login_na_caixa() {
        assertThat(loginPage.validarNomeTituloCaixa(), is("Login Caixa"));
    }


}
