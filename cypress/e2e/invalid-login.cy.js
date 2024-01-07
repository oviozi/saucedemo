describe("Invalid Login Test", () => {
  let usersAndPasswords;
  before(function () {
    cy.fixture("invalidUserPassword").then((userData) => {
      usersAndPasswords = userData;
    });
  });

  it("Add 10 invalid user and password and click login.", () => {
    cy.wrap(usersAndPasswords).each((pair) => {
      cy.visit("/");
      cy.get("[data-test=username]").type(pair.username);
      cy.get("[data-test=password]").type(pair.password);
      cy.get("[data-test=login-button]").click();
      cy.checkError(
        "Epic sadface: Username and password do not match any user in this service"
      );
    });
  });
});
