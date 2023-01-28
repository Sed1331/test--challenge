/** @format */
import { faker } from "@faker-js/faker";

describe("Api tests", () => {
  const email = faker.internet.email();
  const password = "Arm@2#3Badalian";
  let userId;
  let token;
  let isbn;

  it("Creating a user", async () => {
    const res = await cy.request({
      url: "https://demoqa.com/Account/v1/User",
      method: "POST",
      body: {
        userName: email,
        password,
      },
    });
    expect(res.status).to.eq(201);
    expect(res.isOkStatusCode).to.eq(true);
    userId = res.body.userID;
  });

  it("Cannot create account with already registered email", async () => {
    const res = await cy.request({
      url: "https://demoqa.com/Account/v1/User",
      method: "POST",
      body: {
        userName: email,
        password: password,
      },
      failOnStatusCode: false,
    });
    expect(res.status).to.eq(406);
    expect(res.isOkStatusCode).to.eq(false);
  });

  it("Add list of books", async () => {
    const tokenRes = await cy.request({
      url: "https://demoqa.com/Account/v1/GenerateToken",
      method: "POST",
      body: {
        userName: email,
        password,
      },
    });
    token = tokenRes.body.token;

    cy.request({
      url: "https://demoqa.com/BookStore/v1/Books",
      method: "GET",
    }).then((data) => {
      isbn = data.body.books[0].isbn;

      cy.request({
        url: "https://demoqa.com/BookStore/v1/Books",
        method: "POST",
        headers: {
          Authorization: `Bearer ${token}`,
        },
        body: {
          userId,
          collectionOfIsbns: [
            {
              isbn,
            },
          ],
        },
      }).then((data) => {
        expect(data.status).to.eq(201);
        expect(data.isOkStatusCode).to.eq(true);
      });
    });
  });

  it("delete a book", () => {
    cy.request({
      url: "https://demoqa.com/BookStore/v1/Book",
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: {
        isbn,
        userId,
      },
    }).then((data) => {
      cy.log(data);
      expect(data.status).to.eq(204);
      expect(data.isOkStatusCode).to.eq(true);
    });
  });
});
