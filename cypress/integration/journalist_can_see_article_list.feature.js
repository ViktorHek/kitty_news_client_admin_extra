describe('Journalist can login to see article form', () => {
  beforeEach(() => {
    cy.server()
    cy.route({
      method: 'POST',
      url: 'http://localhost:3000/api/auth/sign_in',
      response: 'fixture:journalist_can_login.json',
      headers: {
        uid: 'journalist@mail.com',
      },
    })
    cy.route({
      method: 'GET',
      url: 'http://localhost:3000/api/auth/validate_token**',
      response: 'fixture:journalist_can_login.json',
    })
    cy.route({
      method: "GET",
      url: "http://localhost:3000/api/articles",
      response: "fixture:articles_data.json",
    });
    cy.visit('/')

    cy.get("[data-cy='login-form']").within(() => {
      cy.get("[data-cy='email']").type('journalist@mail.com')
      cy.get("[data-cy='password']").type('password')
      cy.get("[data-cy='submit-btn']").contains('Submit').click()
    })
  })

  describe('successfully', () => {
    it('see a list of articles', () => {
      cy.get("index-button").click()
      cy.get("[data-cy='article-index']").within(() => {
        cy.contains("Cats are better than dogs!");
        cy.contains("Have you noticed how smelly dogs are? Well that...");
        cy.contains("Emma should get a cat instead!");
        cy.contains("Why? No borks. No smelly smells.");
        cy.contains("Thomas most likely needs a cat in his life");
        cy.contains("They bring calm vibes. May be needed");
        cy.contains("Why is Emma leaving us? ");
        cy.contains("Please stay. We have cats");
      }) 
    })
  })
})
