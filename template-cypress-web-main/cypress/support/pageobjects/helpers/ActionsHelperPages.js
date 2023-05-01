import ActionsHelperElements from '../../elements/helpers/ActionsHelperElements';
import FieldConverter from '../converters/FieldConverter';
import ScreenshotHelper from './ScreenshotHelper';

require('cypress-plugin-tab');

const acoesHelperElements = new ActionsHelperElements();
const fieldConverter = new FieldConverter();
const screenshotHelper = new ScreenshotHelper();

export default class ActionsHelperPages {
  fillInput(field, value, screenshotEnabled = false, tabEnabled = true) {
    const convertedValue = fieldConverter.convert(value);
    cy.get(acoesHelperElements.dynamicInput(field)).clear();
    if (convertedValue.length > 0) {
      if (tabEnabled) {
        cy.get(acoesHelperElements.dynamicInput(field)).type(convertedValue, {
          delay: 15,
        });
        cy.get(acoesHelperElements.dynamicInput(field)).tab();
      } else {
        cy.get(acoesHelperElements.dynamicInput(field)).type(convertedValue, {
          delay: 15,
        });
      }
    } else if (tabEnabled) {
      cy.get(acoesHelperElements.dynamicInput(field)).tab();
    }
    if (screenshotEnabled) {
      screenshotHelper.getScreenshot(screenshotEnabled);
    }
  }

  clickField(locator, waittime = 2000) {
    cy.get(locator).first().click();
    // eslint-disable-next-line cypress/no-unnecessary-waiting
    cy.wait(waittime);
  }

  clickContinueButton() {
    this.clickField(acoesHelperElements.btnContinue());
  }

  clickConfirmButton() {
    this.clickField(acoesHelperElements.btnConfirm());
  }

  clickStepBackButton() {
    this.clickField(acoesHelperElements.btnStepBack());
  }

  clickCloseDefaultAlertModalButton() {
    this.clickField(acoesHelperElements.btnCloseDefaultAlertModal());
  }

  setFocusContinueButton() {
    cy.get(acoesHelperElements.btnContinue()).first().focus();
  }

  verifyContinueButtonIsDisabled() {
    cy.get(acoesHelperElements.btnContinue()).should('be.disabled');
  }

  verifyConfirmButtonIsDisabled() {
    cy.get(acoesHelperElements.btnConfirm()).should('be.disabled');
  }

  verifyContinueButtonIsEnabled() {
    cy.get(acoesHelperElements.btnContinue()).should('be.enabled');
  }

  verifyCloseDefaultAlertModalButton() {
    cy.get('[class="sc-cjibBx hWfsjk sc-lbVpMG dAiEII error-modal"')
      .get(acoesHelperElements.messageDefaultAlertModal())
      .should(($p) => {
        expect($p).to.have.length(1);
      });
  }

  verifyDefaultAlertMessageDisplayed(message, reason = '') {
    screenshotHelper.getScreenshot();
    cy.log(reason);
    cy.get('[class="sc-cjibBx hWfsjk sc-lbVpMG dAiEII error-modal"')
      .get(acoesHelperElements.messageDefaultAlertModal())
      .should(($p) => {
        expect($p).to.have.length(1);
        expect($p.first()).to.contain(message);
      });
  }
}
