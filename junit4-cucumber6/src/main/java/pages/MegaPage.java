package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import utils.BasePage;

import java.util.List;

public class MegaPage extends BasePage {

    public MegaPage(WebDriver driver) {
        super(driver);
    }

    @FindBy(id = "irparapagamento")
    protected WebElement btnPagamento;

    public void selecionaNumeros(List<String> numerosParaSorteio){
        List<WebElement> numeros = driver.findElements(By.cssSelector("ul.escolhe-numero.mega-sena li a"));
        for(int i = 0; i < numeros.size(); i++){
            String nSorteios = numeros.get(i).getText();
            if(numerosParaSorteio.contains(nSorteios)){
                driver.findElements(By.cssSelector("ul.escolhe-numero.mega-sena li a")).get(i).click();
            }
        }
    }

    public LoginPage acionarBotaoPagamento(){
        btnPagamento.click();
        return new LoginPage(driver);
    }

    @FindBy(id = "valida")
    protected WebElement testeValida;

    public String teste(){
        return testeValida.getText();
    }


}
