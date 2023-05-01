import io.cucumber.junit.Cucumber;
import io.cucumber.junit.CucumberOptions;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
                    features = "src/test/resources/features",
                    glue = {"stepDefinitions", "hooks"},
                    plugin = {"pretty"},
                    monochrome = true,
                    tags = ""
                )
public class RunCucumber {
}
