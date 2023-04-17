FINAL FRONT END CODE CHALLENGE BY JON MOIR

TECHNOLOGIES/LIBRARIES/FRAMEWORKS USED:
-Create-React-App
-React Router V6
-Sweet Alert 2
-Headless UI
-Lottie Files
-Redux Toollkit 
-Tailwind CSS

PROJECT OVERVIEW
This project was made for a final Launchpad by Vog Code Challenge. The app has the following features:

Albums Page
This page uses Redux Thunk to call a JSON placeholder api to display 20 albums.
A modal was required for adding an album, but I also used one to edit them as well.
There is a search bar to search through the ids. The app also allows CRUD mutations to create, edit, or remove albums.

Photos Page
This page also loads 20 photo objects which the user can search through by Album Id. Each search uses the provided api's to find the photos associated with that album id. A reset button was required to escape the search, I applied this to both pages for an improved user experience.

Additional Tech Choices
-Create-React-App: This was a requirement.
-React Router V6: This is the most up-to-date version that pairs best with CRA.
-Sweet Alert 2: Vog often uses this technology. I have implemented it for every CRUD mutation and search. Error handling and messages are managed in the slice related to that action.
-Headless UI: This is another library used by Vog which has pre-built components using tailwind CSS to style them. 
-Lottie Files: I chose to use only one lottie as the app already appears bold and edgy. I used this solely for when the page loads.
-Redux Toollkit: State management was required and RTK is the recomended version from the maintainers. 
-Tailwind CSS: You guessed it, if Vog uses it, I want to make sure I am familiar with it as well.





# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
