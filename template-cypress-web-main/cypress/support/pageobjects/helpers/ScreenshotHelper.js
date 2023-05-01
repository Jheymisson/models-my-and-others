// eslint-disable-next-line cypress/no-unnecessary-waiting
export default class ScreenshotHelper {
  getScreenshot(screenshotEnabled = false) {
    if (screenshotEnabled) {
      cy.screenshot();
    }
  }
}
