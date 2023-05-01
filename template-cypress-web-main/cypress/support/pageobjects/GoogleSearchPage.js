import GoogleSearchElements from '../elements/GoogleSearchElements';
import ActionsHelperPages from './helpers/ActionsHelperPages';
import ScreenshotHelper from './helpers/ScreenshotHelper';

const googleSearchElements = new GoogleSearchElements();
const screenshotHelper = new ScreenshotHelper();
const actionsHelperPages = new ActionsHelperPages();

const url = Cypress.env('BASE_URL');

export default class GoogleSearchPage {
  accessSite(waite = 2000) {
    cy.log(url);
    cy.visit(url);
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(waite);
    screenshotHelper.getScreenshot();
  }

  searchByTerm(term) {
    // Line to exemplify how to store temporary data as alias
    // cy.wrap(cnpj).as('cnpjValue');
    actionsHelperPages.fillInput(
      googleSearchElements.inputSearch(),
      term,
      false,
      false,
    );
    actionsHelperPages.clickField(googleSearchElements.btnSearch());
    screenshotHelper.getScreenshot();
  }

  verifyGoogleTitle() {
    cy.log(cy.title());
    cy.title().should('eq', 'Google');
  }
}
