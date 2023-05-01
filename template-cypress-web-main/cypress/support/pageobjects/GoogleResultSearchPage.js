import GoogleResultSearchElements from '../elements/GoogleResultSearchElements';
import ScreenshotHelper from './helpers/ScreenshotHelper';

require('cypress-plugin-tab');

const screenshotHelper = new ScreenshotHelper();
const googleResultSearchElements = new GoogleResultSearchElements();

export default class GoogleResultSearchPage {
  verifyIfItemIsPresent(title, link) {
    cy.get(googleResultSearchElements.resultItem())
      .contains(title)
      .parent()
      .should('have.attr', 'href', link);
    screenshotHelper.getScreenshot();
  }
}
