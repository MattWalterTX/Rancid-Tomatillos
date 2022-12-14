describe('Single View', () => {

  beforeEach(() => {
    cy.visit('http://localhost:3000/436270')
      .get('.single-view')
      .get('.info')
  });

  it('Should fetch from correct api url when a movie is selected', () => {
    cy.intercept(`https://rancid-tomatillos.herokuapp.com/api/v2/movies/436270`, {
      movies:
      {
        id: 436270,
        title: "Black Adam",
        poster_path: "https://image.tmdb.org/t/p/original//pFlaoHTZeyNkG83vxsAJiGzfSsa.jpg",
        backdrop_path: "https://image.tmdb.org/t/p/original//bQXAqRx2Fgc46uCVWgoPz5L5Dtr.jpg",
        release_date: "2022-10-19",
        overview: "Nearly 5,000 years after he was bestowed with the almighty powers of the Egyptian gods—and imprisoned just as quickly—Black Adam is freed from his earthly tomb, ready to unleash his unique form of justice on the modern world.",
        genres: [
          "Action",
          "Fantasy",
          "Science Fiction"
        ],
        budget: 200000000,
        revenue: 384571691,
        runtime: 125,
        tagline: "The world needed a hero. It got Black Adam.",
        average_rating: 4
      },
    })
  })

    it('Should be able to click a movie and see more info', () => {
       cy.contains('h2', 'Black Adam')
      
  });

  it('Should update url when a movie is clicked', () => {
      cy.url().should('include', '/436270')
  })

  it('Should be able to home button and go home', () => {
    cy.get('.single-view')
      .get('.info')
      .get('.return-button').click()
    cy.get('.all-movies')
  });
})