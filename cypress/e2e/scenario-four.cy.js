/** @format */

import FormPage from "../pom/form-page.cy";
import ElementsPage from "../pom/element-page.cy";

describe("Scenario four test case", { includeShadowDom: true }, () => {
  it("Verify user can submit the form", () => {
    const pic = "CyTestImage.png";
    cy.visit("/");
    ElementsPage.cardItem.contains("Forms").click();
    FormPage.practiceForm.contains("Practice Form").click();
    ElementsPage.firstName.should("have.attr", "placeholder", "First Name").type("Gerimedica");
    ElementsPage.lastName.should("have.attr", "placeholder", "Last Name").type("BV");
    FormPage.email.type("test@test.com");
    FormPage.genderMale.should("have.text", "Male").click();
    FormPage.userNumber.type("0123456789");
    FormPage.datePicker.click();
    FormPage.dateMonth.select(0).invoke("val").should("eq", "0", "contain", "January");
    FormPage.dateYear.select(90).invoke("val").should("eq", "1990", "contain", "1990");
    FormPage.dateDay.each(($el) => {
      var dateName = $el.text();
      if (dateName == "15") {
        cy.wrap($el).click();
      }
    });
    FormPage.subject.type("Cypress Assignment");
    FormPage.readingHobby.click();
    FormPage.picUpload.click().attachFile(pic);
    FormPage.currentAddress.type("Netherlands");
    FormPage.formSubmit.click();
    FormPage.formModal.should("be.visible");
    cy.contains("td", "Student Name").siblings().contains("Gerimedica BV");
    cy.contains("td", "Student Email").siblings().contains("test@test.com");
    cy.contains("td", "Gender").siblings().contains("Male");
    cy.contains("td", "Mobile").siblings().contains("0123456789");
  });
});
