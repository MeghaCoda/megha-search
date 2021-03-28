# Getting Started 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses Muse's [Public API](https://www.themuse.com/developers) and allows the user to query job searches by title. 
[Sanitize HTML](https://www.npmjs.com/package/sanitize-html) was used to sanitize HTML returned from the API for security purposes. 
API request are made using [Axios](https://www.npmjs.com/package/axios).
Site is designed to be navigable via tabs for accessibility purposes.
Site is also mobile-friendly.

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
- Consider a library other than Ant Design Library. While it might be pretty, it's SLOWWWW.
- Ensure proper clearing of filters - currently battling ant library's Select default settings
- Use global variables in sass files for spacing and colors
- Add functional page navigation
- Add ability to search by company
- using indexes as keys is a potentially bad idea; consider using uuid or something similar for unique key generation
