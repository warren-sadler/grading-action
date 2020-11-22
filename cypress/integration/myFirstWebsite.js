/// <reference types="cypress" />

context("My First Website", () => {
  beforeEach(() => {
    cy.visit("./index.html");
  });
  it("Has the correct title", () => {
    expect(cy.title(), "Hello World");
  });
  it("Has an H2", () => {
    expect(cy.get("h2")).exist;
  });
  it("Has an H2 with the correct text", () => {
    cy.get("h2").contains("My First Website");
  });
});
