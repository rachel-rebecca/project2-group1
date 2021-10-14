error-image# Notes from project creators:
This project is currently in the process of being deployed/published through netlify.

Below are screenshots of the app and its functionality:

This is the desktop and hten mobile version for the homepage and search form.
![homepage for desktop](./screenshots/desktop-home.png?raw=true)
![homepage for mobile](./screenshots/mobile-home.png?raw=true)


The keyword is optional, but zipcode and date range are required to search
![search filled out for mobile](./screenshots/mobile-filled.png?raw=true)

After filling out the criteria, the app uses useParams to take the user input data and search the ticketmaster API for related results. The zipcode is also converted to latitutde and longitude (the variable of latlong is what the ticketmaster API accepted) using a search through a 2D array containing zipcodes and their corresponding coordinates. The results are located within a 100 mile radius and display closest in distance to furthest away. Here are the results in desktop then in mobile version.
![results page for desktop](./screenshots/desktop-results.png?raw=true)
![results page for mobile](./screenshots/mobile-results.png?raw=true)


The user can then click the event title for more details. A unique feature of our app is that we kept accessibility and covid precautions in mind. When a user clicks to get more details, the info from the API about healthchecks and accessibilty displays easily for the user to see. The buy tickets button takes the user to an external link to either ticketmaster, or another ticket selling website. 
![event details for desktop](./screenshots/desktop-details.png?raw=true)
![event details for mobile](./screenshots/mobile-details.png?raw=true)

Users are also able to click the star icon to save their favorite events into a favorites list. The solid star indicates the event was added to favorites.
![favorites clicked for desktop](./screenshots/desktop-starred.png?raw=true)
![favorites clicked for mobile](./screenshots/mobile-starred.png?raw=true)

Once on the favorites page, the user can then click the title for more details, buy tickets, or they can click the star again to remove an event from their favorites list.
![favorites list for desktop](./screenshots/desktop-favorites.png?raw=true)
![favorites list for desktop with removed item](./screenshots/desktop-favorites-remove.png?raw=true)


Below is the error image, which I drew on an ipad using the concepts app. 


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
# project2-group1
# merrygo-events
# merrygo-events
