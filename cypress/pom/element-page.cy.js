/** @format */

class ElementsPage {
  get cardItem() {
    return cy.get(".card-body");
  }

  get webTables() {
    return cy.get("#item-3");
  }

  get addItem() {
    return cy.get("#addNewRecordButton");
  }

  get addItemModal() {
    return cy.get(".modal-content");
  }

  get firstName() {
    return cy.get("#firstName");
  }

  get lastName() {
    return cy.get("#lastName");
  }

  get email() {
    return cy.get("#userEmail");
  }

  get age() {
    return cy.get("#age");
  }

  get salary() {
    return cy.get("#salary");
  }

  get department() {
    return cy.get("#department");
  }

  get submitBtn() {
    return cy.get("#submit");
  }
}
export default new ElementsPage();
