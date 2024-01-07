describe("Unauthorized access to internal route Test", () => {
  it("Internal route/endpoint can't manually bypass the login screen. ", () => {
    cy.visit("/" + "?/inventory.html");
    cy.checkError(
      "Epic sadface: You can only access '/inventory.html' when you are logged in."
    );
  });
});
