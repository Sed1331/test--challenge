/** @format */
import ElementsPage from "../pom/element-page.cy";
import WidgetPage from "../pom/widget-page.cy";

describe("Scenario six test case", () => {
  it("Verify the tooltip", () => {
    cy.visit("/");
    ElementsPage.cardItem.contains("Widget").click();
    cy.scrollTo("center");
    WidgetPage.toolTip.contains("Tool Tips").click();
    WidgetPage.toolTipBtn
      .trigger("mouseover")
      .should("have.attr", "aria-describedby", "buttonToolTip");
  });
});
