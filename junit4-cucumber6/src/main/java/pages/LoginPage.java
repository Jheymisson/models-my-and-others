package pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import utils.BasePage;

public class LoginPage extends BasePage {

    public LoginPage(WebDriver driver) {
        super(driver);
    }

    @FindBy(id = "template-title")
    protected WebElement tituloCaixa;

    public String validarNomeTituloCaixa(){
        return tituloCaixa.getText();
    }

}
