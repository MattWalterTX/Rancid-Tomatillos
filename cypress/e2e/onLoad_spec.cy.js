~describe('Feedback Loop login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should see the title of the application', () => {
      cy.get('p')
        .contains('Rotten Tomatillos')
  });

  it('Should see a collection of movies', () => {
     cy.get('.movie-tile')
  });

  it('Should be able to click a movie and see more info', () => {
    cy.get('#694919').click()
      .get('.single-view')
  });

  it('Should be able to see more info', () => {
    cy.get('#694919').click()
    cy.get('.single-view')
      .get('.info')
  });

  it('Should be able to click a button and go home', () => {
    cy.get('#694919').click()
    cy.get('.single-view')
      .get('.info')
      .get('.return-button').click()
    cy.get('.all-movies')
  });
});