package org.example.hooks;

import io.cucumber.java.*;

public class Hooks {

    @BeforeAll
    public static void beforeAll() {
        System.out.println("Setting up Hook");
    }

    @BeforeStep
    public void doSomethingBeforeStep(Scenario scenario){

    }

    @AfterStep
    public void doSomethingAfterStep(Scenario scenario){
        if (scenario.isFailed()) {
            System.out.println(scenario.getName());
        }
    }

    @AfterAll
    public static void afterAll() {
        System.out.println("Closing up Hook");
    }

}
