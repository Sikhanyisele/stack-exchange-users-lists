# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

## Decisions Took When implementing the project

Well there is nothing hectic which I did. It was a matter of following the React best practices.
This is React, and the app needs to be responsive, hence I decided to use Tailwind to make things easier
At first there was a challenge with getting the response back from the API as it had request limits, this
is why you will see a commented out mocky API URL in the App.tsx file, this
was for testing purposes and also to avoid the request limitations, it is the same API as it has the same data as when you normally 
get from the stackexchange API.

In the App.tsx file you will notice the actual API is commented out and that is because of the request limitation even when not connected to 
the VPN, I have then replaced with the Mocky API as mentioned above. Please feel free to comment out the mocky API and replace with the actual one below,
it will still run for as long as there is no request limitation

## Estimations

Review - 1 hour. \
Design - 1 hour (mobile and desktop). \
Implementation - 3 hours. \
Testing - 30 minutes. \
Documentation - 30 minutes

## For clean testing or starting a fresh test
Kindly navigate to the session storage and clear it then refresh the page
