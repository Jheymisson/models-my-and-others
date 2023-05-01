/* eslint-disable promise/prefer-await-to-then */
/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
/// <reference types="cypress" />
import { After } from 'cypress-cucumber-preprocessor/steps';
// import CheckerHelper from '../../pageobjects/helpers/CheckerHelper';

After(() => {
  // if (CheckerHelper.hasAlias(cy, 'cnpjValue')) {
  // cy.get('@cnpjValue').then((cnpj) => {
  //   if (cnpj != null) {
  //     cy.task('deleteSampleDataByCnpj', cnpj).should('equal', true);
  //   }
  // });
  // }
});
