/// <reference types="cypress" />
import { And, Given, Then, When } from 'cypress-cucumber-preprocessor/steps';
import ActionsHelperPages from '../../pageobjects/helpers/ActionsHelperPages';
import MongoDbHelperActions from '../../pageobjects/helpers/MongoDbHelperActions';

const acoesHelperPage = new ActionsHelperPages();
const mongoDbHelperActions = new MongoDbHelperActions();

Given('I click continue', () => {
  acoesHelperPage.clickContinueButton();
});

Given('The confirm action disabled', () => {
  acoesHelperPage.verifyConfirmButtonIsDisabled();
});

When('I click continue', () => {
  acoesHelperPage.clickContinueButton();
});

When('I click confirm', () => {
  acoesHelperPage.clickConfirmButton();
});

When('I click back', () => {
  acoesHelperPage.clickStepBackButton();
});

And('I click in the close action of the alert screen', () => {
  acoesHelperPage.clickCloseDefaultAlertModalButton();
});

And(
  'I view a request to contact Support because the {string}',
  (description) => {
    const message =
      'com a central através dos números 4004-4474 ou 0800 723 4474 ' +
      'para atualizar seus dados e continuar o credenciamento';
    acoesHelperPage.verifyCloseDefaultAlertModalButton();
    acoesHelperPage.verifyDefaultAlertMessageDisplayed(message, description);
  },
);

Then('The continue action disabled', () => {
  acoesHelperPage.verifyContinueButtonIsDisabled();
});

Then('The continue action enabled', () => {
  acoesHelperPage.verifyContinueButtonIsEnabled();
});

Then('The establishment must have {string} status in database', (status) => {
  mongoDbHelperActions.verifyCnpjIsBlocked(status);
});
