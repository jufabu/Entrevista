import { signUp } from "../support/selectors/signUp"

describe('Interview', () => {
  it('sign up', () => {
    cy.visit('https://demo.casino',{failOnStatusCode: false});
    cy.get(signUp.btnClose).click();    
    cy.get(signUp.btnSignUp).click();
    cy.get(signUp.txtEmail).type("jufabu10@hotmail.com");
    cy.xpath(signUp.ckbTermYCond).click();
   cy.get(signUp.txtInputPswd).type("Juanfra10");
    cy.get(signUp.txtInputConfirmPswd).type("Juanfra10");
    cy.xpath(signUp.ckbNoBonus).click();
    cy.get(signUp.btnSubmit).click();
  })
})


describe('Feature', () => {
  it('feature', () => {
    cy.visit('https://demo.casino',{failOnStatusCode:false});
    cy.get(signUp.btnClose).click();
    cy.xpath(signUp.btnSignIn).click();
    cy.get(signUp.btnSignInMail).click();
    cy.get(signUp.txtUserName).type("jufabu10@gmail.com");
    cy.get(signUp.txtUserPassword).type("Juanfra10");
    cy.get(signUp.btnSubmit).click();
    cy.get(signUp.btnProfile).click();
    cy.get(signUp.btnProfileSettings).click();
    cy.get(signUp.txtProfileName).type("Juan");
    cy.get(signUp.txtProfileSurname).type("Burgos");
    cy.get(signUp.txtProileMiddleName).type("Francisco");
    cy.xpath(signUp.cbxGender).click();
    cy.xpath(signUp.optGender).click();
    cy.get(signUp.txtDateOfBirth).click();
    cy.xpath(signUp.btnFechaAno).click();
    cy.get(signUp.btnAno).contains("2005").click();
    cy.xpath(signUp.lblAnoSeleccion).click();
    cy.get(signUp.lblMonth).click();
    cy.xpath(signUp.lblDay).click();
    cy.xpath(signUp.btnUpdateInfo).click();
  })
})