/** @format */

class WidgetPage {
  get bar() {
    return cy.get(".menu-list > #item-4");
  }

  get toolTip() {
    return cy.get(".menu-list > #item-6");
  }

  get startProgressBar() {
    return cy.get("#startStopButton");
  }

  get progressBar() {
    return cy.get('[role="progressbar"]');
  }

  get toolTipBtn() {
    return cy.get("#toolTipButton");
  }
}
export default new WidgetPage();
