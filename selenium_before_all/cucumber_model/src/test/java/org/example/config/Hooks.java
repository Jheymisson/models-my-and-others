package org.example.config;

import io.cucumber.java.After;
import io.cucumber.java.AfterStep;
import io.cucumber.java.Before;
import io.cucumber.java.BeforeStep;
import org.example.webdriver.WebDriverFactory;

public class Hooks {

    @Before
    public void antesDeCadaCenario() {
        WebDriverFactory.createLocalDriver();
    }

    @After
    public void depoisDeCadaCenario() {
        WebDriverFactory.clearUpDriver();
    }

//    @Before
//    public void iniciarNavegador() {
//        System.out.println("Inicia o navegador");
//    }
//
//    @BeforeStep
//    public void executaAntesDeCadaCenario() {
//        System.out.printf("Executando antes da etapa");
//    }
//
//    @AfterStep
//    public void executaDepoisDeCadaCenario() {
//        System.out.printf("Executando depois da etapa");
//    }
//
//    @After
//    public void fecharNavegador() {
//        System.out.println("Fecha o navegador");
//    }

}
