FINAL FRONT END CODE CHALLENGE BY JON MOIR
 
Application Links: 
Github Repo: https://github.com/mojonny/jon_moir_launchpad_frontend_final_code_challenge  
Vercel Deployment*: https://jon-moir-launchpad-frontend-final-code-challenge.vercel.app/  
*note: I have temporarily deployed the app to test different screen sizes and user flow. I have also added it to allow quick access to this review. After the review, I will remove the project from Vercel and make the repo private.
 
App Overview: 
Albums Page: This page uses Redux Thunk to call a JSON placeholder api to display 20 albums. A modal was required for adding an album, but I also used one to edit them as well. There is a search bar to search through the ids. The app also allows CRUD mutations to create, edit, or remove albums.

Photos Page: This page also loads 20 photo objects which the user can search through by Album Id. Each search uses the provided APIs to find the photos associated with that album id. A reset button was required to escape the search, I applied this to both pages for an improved user experience.

Readme File: I have made this and documented how to run the app on another machine inside the repo.

Running the code:  
Clone the repository: git clone https://github.com/mojonny/jon_moir_launchpad_frontend_final_code_challenge.git 
Run npm install  
Run npm start

 
Technologies/Frameworks/Libraries used: 
-Create-react-app: This was a requirement, but I am also familiar with Vite and Nextjs.
-Redux Toolkit: State management was required and RTK is the recommended version by the maintainers. 
-React Router V6: This is the most up-to-date version that pairs best with CRA.
-Tailwind CSS: You guessed it, if Vog uses it, I want to make sure I am familiar with it as well.
-Sweet Alert 2: Vog often uses this technology. I have implemented it for every CRUD mutation and search. Error handling and messages are managed in the slice related to that action.
-Headless UI: This is another library used by Vog which has pre-built components using Tailwind CSS to style them. 
-Lottie Files: I chose to use only one Lottie as the app already appears bold and edgy. I used this solely when the page loads.



# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.
