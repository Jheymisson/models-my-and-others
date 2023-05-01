package hooks;

import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.Scenario;
import org.openqa.selenium.WebDriver;
import utils.BaseTest;
import utils.CaptarConfig;
import utils.Screenshot;

import java.util.Properties;

public class Hooks {

    private WebDriver driver;
    private BaseTest baseTest;
    private CaptarConfig captarConfig;
    Properties prop;

    @Before(order = 0)
    public void captarPropriedade(){
        captarConfig = new CaptarConfig();
        prop = captarConfig.iniciarPropriedades();
    }

    @Before(order = 1)
    public void iniciarNavegador(){
        String navegador = prop.getProperty("browser");
        baseTest = new BaseTest();
        driver = baseTest.inicializacao(navegador);
    }

    @After(order = 0)
    public void fecharNavegador() {
        driver.quit();
    }

    @After(order = 1)
    public void screen(Scenario scenario) {
        if (scenario.isFailed()) {
            Screenshot.takeScreenShot(driver);
        }
    }

}
