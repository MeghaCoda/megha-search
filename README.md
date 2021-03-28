# Getting Started 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses Muse's [Public API](https://www.themuse.com/developers) and allows the user to query job searches by title. 
[Sanitize HTML](https://www.npmjs.com/package/sanitize-html) was used to sanitize HTML returned from the API. 
Site is designed to be navigable via tabs for accesibility purposes.
Site is mobile-friendly.

In order to install this project, make sure you have:
- Node
- NPM

Already installed. Please use the version specified in `package.json`

Then run `npm install` to install the application

To run the project, run `npm start`


### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### `npm test`

Launches the test runner in the interactive watch mode.\


### Roadmap

- Remove usage of 'any' type throughout the application
- Add usage of Context - I got tripped up trying to make Context work with Typescript
- Improve JS bundling to remove unused Javascript, which is making the app painfully slow on mobile 0_0
- Greatly expand testing
- Use global variables in sass files for spacing and colors
- Add functional page navigation
- Add ability to search by company
