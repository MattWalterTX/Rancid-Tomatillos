describe('Homepage', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000');
  });

  it('Should see the title of the application', () => {
      cy.get('.site-title')
  });

  it('Should see a collection of movies', () => {
     cy.get('.movie-tile')
  });

  it('Should be able to click a movie and see more info', () => {
    cy.visit('http://localhost:3000/436270')
      .get('.single-view')
  });

  it('Should go back to home page when back button on browser is clicked', () => {
    cy.get('#436270').click()
    cy.go('back')
      .url().should('include', '/')
    cy.get('.all-movies')

  })

  it('Should fetch from  correct api url', () => {
    cy.intercept(`https://rancid-tomatillos.herokuapp.com/api/v2/movies`,{
      movies:
      {
        average_rating: 4,
        backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
        id: 436270,
        poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
        release_date: "2022-10-19",
        title: "Black Adam"
      },
    })
  });
  
});