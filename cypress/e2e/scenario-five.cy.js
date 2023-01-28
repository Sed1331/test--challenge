/** @format */

import ElementsPage from "../pom/element-page.cy";
import widgetPageCy from "../pom/widget-page.cy";
import WidgetPage from "../pom/widget-page.cy";

describe("Scenario five test case", () => {
  it("Verify the progress bar", () => {
    cy.visit("/");
    ElementsPage.cardItem.contains("Widget").click();
    WidgetPage.bar.contains("Progress Bar").click();
    WidgetPage.progressBar.should("have.attr", "aria-valuenow", 0);
    WidgetPage.startProgressBar.click();
    cy.get('[role="progressbar"]', { timeout: 15000 }).should("have.attr", "aria-valuenow", 100);
    WidgetPage.progressBar.should("have.class", "bg-success");
  });
});
