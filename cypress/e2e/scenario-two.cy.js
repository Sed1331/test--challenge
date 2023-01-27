/** @format */

import ElementsPage from "../pom/element-page.cy";

describe("Scenario two test case", () => {
  it("Verify user can edit the row in a table", () => {
    cy.visit("/");
    ElementsPage.cardItem.contains("Elements").click();
    ElementsPage.webTables.contains("Web Tables").click();
    ElementsPage.editRow.click();
    ElementsPage.firstName.clear().type("Gerimedica");
    ElementsPage.lastName.clear().type("BV");
    ElementsPage.submitBtn.click();
    cy.contains(".rt-td", "Gerimedica").siblings().contains("BV");
  });
});
