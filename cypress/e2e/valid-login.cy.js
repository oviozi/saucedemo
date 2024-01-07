describe("Valid login", () => {
  let users;
  before(function () {
    cy.fixture("users").then((userData) => {
      users = userData;
    });
  });

  it("Login with valid user", () => {
    cy.visit("/");
    cy.get("[data-test=username]").type(users.validUser.username);
    cy.get("[data-test=password]").type(users.password);
    cy.get("[data-test=login-button]").click();
    cy.url().should("include", "/inventory.html");
    cy.logout();
  });

  it("Login with other valid users", () => {
    cy.wrap(users.otherUsers).each((username) => {
      cy.visit("/");
      cy.get("[data-test=username]").type(username);
      cy.get("[data-test=password]").type(users.password);
      cy.get("[data-test=login-button]").click();
      cy.url().should("include", "/inventory.html");
      cy.logout();
    });
  });

  it("Login with locked user", () => {
    cy.visit("/");
    cy.get("[data-test=username]").type(users.blockedUser.username);
    cy.get("[data-test=password]").type(users.password);
    cy.get("[data-test=login-button]").click();
    cy.url().should("not.include", "/inventory.html");
    cy.checkError("Epic sadface: Sorry, this user has been locked out.");
  });
});
