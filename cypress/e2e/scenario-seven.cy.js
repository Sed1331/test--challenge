/** @format */

import ElementsPage from "../pom/element-page.cy";
import InteractionPage from "../pom/interactions-page.cy";

describe("Scenario seven test case", () => {
  it("Verify user can drag and drop", () => {
    cy.visit("/");
    ElementsPage.cardItem.contains("Interactions").click();
    cy.scrollTo("bottom");
    InteractionPage.dragDrop.contains("Droppable").click();
    InteractionPage.dragItem.drag(InteractionPage.dropItem, { force: true }).then((success) => {
      assert.isTrue(success);
    });
  });
});
