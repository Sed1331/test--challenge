/** @format */

import ElementsPage from "../pom/element-page.cy";

describe("Scenario one test case", () => {
  it("Verify user can enter new data into the table", () => {
    cy.visit("/");
    ElementsPage.cardItem.contains("Elements").click();
    ElementsPage.webTables.contains("Web Tables").click();
    ElementsPage.addItem.click();
    ElementsPage.addItemModal.should("exist");
    ElementsPage.firstName.should("have.attr", "placeholder", "First Name").type("Alden");
    ElementsPage.lastName.should("have.attr", "placeholder", "Last Name").type("Cantrell");
    ElementsPage.email.should("have.attr", "placeholder", "name@example.com").type("test@test.com");
    ElementsPage.age.should("have.attr", "placeholder", "Age").type("30");
    ElementsPage.salary.should("have.attr", "placeholder", "Salary").type("12345");
    ElementsPage.department.should("have.attr", "placeholder", "Department").type("QA");
    ElementsPage.submitBtn.click();
    cy.contains(".rt-td", "Alden").siblings().contains("Cantrell");
  });
});
