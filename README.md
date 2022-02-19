This project is a todo application with a React frontend connected to a Node
backend with express, and Mongodb as a database

# step 1 - set up the backend service

# Must have node and npm installed

download both node and npm at nodejs.org

# Create your Node(Express) backend

create a folder for app (todo-app)
create a node project using the command ` npm init -y`
create a folder server inside the todo-app
create a index.js file -- server/index.js to run the server
use express to create a web server which runs on port 3001

<!--
const express = require("express");
const PORT = process.env.PORT || 3001;
const app = express();
app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
-->

# install Express as dependency

`npm i express`

# Added new scripts in package.json as

<!--
"scripts": {
  "start": "node server/index.js"},
-->

# run the node app

`npm start`

# step 2 - set up the frontend/client service

# open a terminal and use create-react-app to create a new React project with the name client as

` npx create-react-app client`

# Docker-compose instructions

run `docker-compose build` on your app's main directory

# To spin up the container

run `docker compose up -d`

# remove everything from connection

run `docker compose down`

# stop the connection

run `docker compose stop`

# see list of docker containers

run `docker ps`

# Connect api to your Database

install mongoose `npm install mongoose`

# Testing examples

create -react-app ships with jest. only need to add react-test-renderer for rendering snapshots

run ` npm install --dev react-test-renderer '

# add testing library/dom for testing

run `npm install --save-dev @testing-library/dom`

#
