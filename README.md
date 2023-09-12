# Getting Started 

This project was created in a day as part of a coding test for a job (which I fortunately landed!). It was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It uses a public API (intentionally unspecified per the company's request) and allows the user to query job searches by title. 
[Sanitize HTML](https://www.npmjs.com/package/sanitize-html) was used to sanitize HTML returned from the API for security purposes. 
API request are made using [Axios](https://www.npmjs.com/package/axios).
Site is designed to be navigable via tabs for accessibility purposes.
Site is also mobile-friendly.
Currently only tested in Chrome.

In order to install this project, make sure you have:
- Node
- NPM

Already installed. Please use the version specified in `package.json`

Then run `npm install` to install the application

To run the project, run `npm start`


### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.

### Known bugs
- Pressing the down key does not let you navigate through filter select elements - not accessible
- Filters do not clear properly 

### Roadmap
- Add loading state to search home page
- Add jest tests
- Remove usage of 'any' type throughout the application
- Add usage of Context - I got tripped up trying to make Context work with Typescript
- Improve JS bundling to remove unused Javascript, which is making the app painfully slow on mobile 0_0
- fix existing ESLint warnings
- Consider a library other than Ant Design Library. While it might be pretty, it's SLOWWWW.
- Add more comments 
- Test in other browsers
- Use global variables in sass files for spacing and colors
- Add functional page navigation
- Add ability to search by company
- using indexes as keys is a potentially bad idea; consider using uuid or something similar for unique key generation
