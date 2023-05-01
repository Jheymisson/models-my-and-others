/// <reference types="cypress" />
import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import GoogleResultSearchPage from '../pageobjects/GoogleResultSearchPage';
import GoogleSearchPage from '../pageobjects/GoogleSearchPage';

const googleSearchPage = new GoogleSearchPage();
const googleResultSearchPage = new GoogleResultSearchPage();

Given('Eu tenha acessado a pagina de pesquisa do Google', () => {
  googleSearchPage.accessSite();
});

And('O titulo da pagina de pesquisa do Google for exibido', () => {
  googleSearchPage.verifyGoogleTitle();
});

When('Eu pesquisar pelo termo {string}', (term) => {
  googleSearchPage.searchByTerm(term);
});

Then(
  'Eu devo visualizar o rotulo {string} e o link {string} como um dos itens de resultado',
  (title, link) => {
    googleResultSearchPage.verifyIfItemIsPresent(title, link);
  },
);
