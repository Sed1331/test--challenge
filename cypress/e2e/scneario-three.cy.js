/** @format */

import ElementsPage from "../pom/element-page.cy";

describe("Scenario three test case", () => {
  const image = 'img[src="/images/Toolsqa_1.jpg"]';

  it("Verify broken image", () => {
    cy.visit("/");
    ElementsPage.cardItem.contains("Elements").click();
    ElementsPage.brokenLinks.contains("Broken Links - Images").click();
    cy.get(image).should("not.have.attr", "href");
  });
});
