# Rancid Tomatillos

## Abstract
- Multi-page React application that pulls movies from an external API that we can select to view more details.

#### Goals and Objectives

- Implement React and Router to turn our vanilla Javascript app into a true multi-page application
- Work with an API to render data from multiple specified endpoints
- Solidify the code review process
- Create a robust Cypress test suite that thoroughly tests all user stories

## Technologies
- ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
   - ![React](https://img.shields.io/badge/react-%23323330.svg?style=for-the-badge&logo=react&logoColor=%23F7DF1E)
   - ![Router](https://img.shields.io/badge/router-%23323330.svg?style=for-the-badge&logo=react-router&logoColor=%CA4245)
- ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
- ![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
- ![Cyrpess](https://img.shields.io/badge/cypress-%1004E9F.svg?style=for-the-badge&logo=cypress&logoColor=%23F7DF1E)

## Illustrations
![Screenshot name](url)

## Features
- Displays all movies by their posters
- Selecting a movie navigates to a new page with more details for that movie
- Can return to the home page via the on page button or use of the browser navigation arrows.
- 60% accessibility score on Lighthouse and app is fully tabbable

## Possible Future Extensions
- Live dynamic searching of movies by title
- Would also like to extend this to include a genre filtering search

#### Milestones
- This project has given us more exposure to React and Router that we were able to apply and test with Cyrpess to ensure a better UX 

#### Challenges 
- Deployment was oddly more complicated than we envisioned. It pointed out an odd type error we missed on our locals where it tried to process the yet un-selected movie id which prevented anything from loading upon deployment.

## Set Up
1. Clone the repo
   ```sh
   git clone git@github.com:MattWalterTX/Overlook-Project.git
   ```
2. Enter the directory and install NPM packages
   ```sh
   npm install
   npm start
   ``` 
3. Enter the following url in your browser: http://localhost:3000/
4. Explore the website

## Sources
  - [MDN](http://developer.mozilla.org/en-US/)
  - [YouTube](https://www.youtube.com/)
  - [Canva](https://www.canva.com/)

## Contributors
  - [Thomas Peterson](https://github.com/thomedpete)
  - [Matt Walter](https://github.com/MattWalterTX)

## Project Specs
  - The project spec & rubric can be found [here](https://frontend.turing.edu/projects/module-3/rancid-tomatillos-v3.html)
