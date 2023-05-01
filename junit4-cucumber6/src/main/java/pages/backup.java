package pages;

import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class backup {

    @FindBy(id = "n14")
    protected WebElement btnN2;

    @FindBy(id = "n21")
    protected WebElement btnN3;

    @FindBy(id = "n39")
    protected WebElement btnN4;

    @FindBy(id = "n49")
    protected WebElement btnN5;

    @FindBy(id = "50")
    protected WebElement btnN6;

    public void acionarPrimeiroNum(){
        //btnN1.click();
    }

    public void acionarSegundoNum(){
        btnN2.click();
    }

    public void acionarTerceiroNum(){
        btnN3.click();
    }

    public void acionarQuartoNum(){
        btnN4.click();
    }

    public void acionarQuintoNum(){
        btnN5.click();
    }

    public void acionarSextoNum(){
        btnN6.click();
    }
}
