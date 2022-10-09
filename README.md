# Example UI

This project is intended to form the boilerplate for standing up a stable, responsive, and well-structured UI project. 
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
This project integrates a number of key components:
- Redux
- Linting via ES Lint
- Routing via React Router Dom v6
- Pre-built components via Material UI v5
- Error fallback

## Getting Started
### Install dependencies
`npm install`
### Configure values
`public/manifest.json`
- `short_name` - Your application's short name

`public/manifest.json`
- `name` - Your application's name

`public/index.html`
- Replace `<title>Example App</title>` with your application's name

`package.json`
- `name` - Your application's name

`src/config.js`
- `APP_NAME` - Your application's name to be displayed on the navigation bar
- `pages` - The pages that are available for navigation
- `settings` - The personal pages are available for navigation and the logout button

`src/aws-exports.js`
- AWS Cognito details required for initializing authentication 

### Update logos with your images
`public/favicon.ico`

`public/logo192.png`

`public/logo512.png`

`src/logo.svg`


## Makefile Commands
### `make start`

Runs the app in the development mode.\
Open [http://localhost:3001](http://localhost:3001) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `make lint`

Scans the app for issues relating to the ES Lint configuration.

### `make fix`

Applies ES Lint fixes to app files.

### `make test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more
information.

### `make build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

## Project Structure
```angular2html
.
├── App.css
├── App.js
├── App.test.js
├── Routing.js
├── amplifyStyles.css
├── aws-exports.js
├── components
│   ├── ErrorBoundary.js
│   ├── login
│   │   ├── Footer.js
│   │   ├── Header.js
│   │   ├── SignInFooter.js
│   │   ├── SignInHeader.js
│   │   └── index.js
│   └── responsiveAppBar
│       └── index.js
├── config.js
├── index.css
├── index.js
├── logo.svg
├── pages
│   ├── Account.js
│   ├── Dashboard.js
│   ├── Home.js
│   ├── New.js
│   └── Profile.js
├── redux
│   ├── action-types
│   │   └── exampleTypes.js
│   ├── actions
│   │   └── exampleActions.js
│   ├── reducers
│   │   ├── exampleReducer.js
│   │   └── index.js
│   └── store.js
├── reportWebVitals.js
└── setupTests.js
```

## Ejecting Create React App
### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will
remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right
into your project so you have full control over them. All of the commands except `eject` will still work, but they will
point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you
shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't
customize it when you are ready for it.

## Learn More

You can learn more in
the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved
here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved
here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved
here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved
here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved
here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved
here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
