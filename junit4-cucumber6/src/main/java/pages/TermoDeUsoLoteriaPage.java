package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utils.BasePage;

public class TermoDeUsoLoteriaPage extends BasePage {

    public TermoDeUsoLoteriaPage(WebDriver driver) {
        super(driver);
    }

    @FindBy(id = "botaosim")
    protected WebElement btnSim;

    public String validaUrl(){
        return driver.getCurrentUrl();
    }

    public HomeLoteriaPage acionarBotaoSim(){
        btnSim.click();
        return new HomeLoteriaPage(driver);
    }

}
