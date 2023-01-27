/** @format */

import ElementsPage from "../pom/element-page.cy";
import WidgetPage from "../pom/widget-page.cy";

describe("Scenario five test case", () => {
  it("Verify the progress bar", () => {
    cy.visit("/");
    ElementsPage.cardItem.contains("Widget").click();
    WidgetPage.bar.contains("Progress Bar").click();
    WidgetPage.progressBar.should("have.attr", "aria-valuenow", 0);
    WidgetPage.startProgressBar.click();

    //not finished
  });
});
