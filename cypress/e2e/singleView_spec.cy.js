describe('Single View', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/436270')
      .get('.single-view')
      .get('.info')
  });

    it('Should be able to click a movie and see more info', () => {
       cy.contains('h2', 'Black Adam')
      
  });

  it('Should be able to click a button and go home', () => {
    cy.get('.single-view')
      .get('.info')
      .get('.return-button').click()
    cy.get('.all-movies')
  });
})