/** @format */

class InteractionPage {
  get dragDrop() {
    return cy.get(".menu-list > #item-3");
  }

  get dragItem() {
    return cy.get("#draggable");
  }

  dropItem = "#droppable";
}
export default new InteractionPage();
