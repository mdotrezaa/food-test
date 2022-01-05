# Getting Started with Food Test App

[DEMO](http://food-test.herokuapp.com/)

## Installation

Go to your directory, you can run:

### `git clone https://github.com/mdotrezaa/food-test.git`

Clone this app in your directory.\ 
Go inside folder `/food-test` then run the app.

## Run Project

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm i or npm update`

If you get error when you tried **`npm start`**.\
Update your **`node.js`** to newest version.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Deploy to Heroku

Basic steps:
1. Sign Up to [Heroku](https://heroku.com/).
2. Setup our React App for deployment.

Choose your Deployment method:

### Heroku Git
1. Download and install the Heroku CLI
2. Login into your Heroku:
```
$ heroku login

```
3. Clone the repository.
```
$ heroku git:clone -a food-test
$ cd food-test

```
4. Deploy your changes.
```
$ git add .
$ git commit -am "deploy"
$ git push heroku master

```

### Connect Github
1. Connect Heroku to your Github.
2. Search for a repository to connect.
3. Find Deploy Branch Button then Click.
