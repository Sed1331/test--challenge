/** @format */

class FormPage {
  get practiceForm() {
    return cy.get(".menu-list > #item-0");
  }

  get email() {
    return cy.get("#userEmail-wrapper");
  }

  get genderMale() {
    return cy.get('[for="gender-radio-1"]');
  }

  get userNumber() {
    return cy.get("#userNumber");
  }

  get datePicker() {
    return cy.get("#dateOfBirthInput");
  }

  get dateMonth() {
    return cy.get(".react-datepicker__month-select");
  }

  get dateYear() {
    return cy.get(".react-datepicker__year-select");
  }

  get dateDay() {
    return cy.get(".react-datepicker__day");
  }

  get subject() {
    return cy.get("#subjectsContainer");
  }

  get readingHobby() {
    return cy.get('[for="hobbies-checkbox-2"]');
  }
  get picUpload() {
    return cy.get("#uploadPicture");
    p;
  }

  get currentAddress() {
    return cy.get("#currentAddress");
  }

  get formSubmit() {
    return cy.get("#submit");
  }

  get formModal() {
    return cy.get(".modal-body");
  }
}
export default new FormPage();
