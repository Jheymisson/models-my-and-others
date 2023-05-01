package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utils.BasePage;

public class HomeLoteriaPage extends BasePage {

    public HomeLoteriaPage(WebDriver driver) {
        super(driver);
    }

    @FindBy(className = "titulo-mega-sena")
    protected WebElement btnMegaVirada;

    public MegaPage acionarBotaoMegaVirada(){
        btnMegaVirada.click();
        return new MegaPage(driver);
    }


}
