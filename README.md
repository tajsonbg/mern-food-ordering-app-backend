# MERN Food Ordering App - Backend

## Table of Contents
- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack and Important Dependencies](#tech-stack-and-important-dependencies)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [License](#license)

### Introduction

This README file is dedicated to the backend part of the MERN Food Ordering App project, which is hosted in a separate GitHub repository. I developed the backend using MongoDB, Express, Node.js, and TypeScript. The primary motivation for this project was to complement my frontend work, where I have a stronger technical understanding.

Before starting this project, I had prior experience with C# and REST API development. However, this project significantly enhanced my understanding of creating REST APIs with Node.js and Express using TypeScript. It also provided valuable practice in structuring a project to be both readable and maintainable.

For this project, I utilized Express for the web framework, TypeScript for type safety, Node.js for the runtime environment, and Cloudinary for storing image URLs in the cloud. In the following sections, I will provide detailed instructions on setting up and running this backend project, along with an overview of its code structure and technologies used.

## Features
The backend of the MERN Food Ordering App includes the following features:

- **Authentication with Auth0**: Secure validation of calls using Auth0 tokens, which can be parsed and checked.
- RESTful API Routes:
- **MyRestaurantRoute**: Manage restaurant-related data in MongoDB.
- **MyUserRoute**: Manage user-related data in MongoDB.
- **OrderRoute**: Handle orders and manage order-related data in MongoDB.
- **RestaurantRoute**: Browse and explore restaurant data in MongoDB.
- Payment Processing with Stripe: Securely handle payment transactions using the Stripe API.
- Image Storage with Cloudinary: Store image URLs in the cloud using Cloudinary for easy access and management.

### Tech Stack and Important Dependencies
- **Node.js**: A JavaScript runtime built on Chrome's V8 JavaScript engine.
- **Express**: A minimal and flexible Node.js web application framework.
- **TypeScript**: A typed superset of JavaScript that compiles to plain JavaScript.
- **MongoDB**: A NoSQL database for storing application data.
- **Cloudinary**: For storing image URLs on the cloud.
- **Mongoose**: An Object Data Modeling (ODM) library for MongoDB and Node.js.
- **Auth0**: For authentication and authorization
- **Stripe**: For payment processing.

## Setup Instructions

For logical reasons, it is advised to set up this project before the frontend part. Please follow the steps carefully to ensure this project is up and running on your local machine.

### Prerequisites
- [Node.js](https://nodejs.org/) (v20.9.0 version is stable, may work on lower versions also)
- npm (10.1.0 version is stable, may work on lower versions also)

### Clone the Repository
Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/tajsonbg/mern-food-ordering-app-backend.git
```

### Navigate to the Project Directory
Change to the project directory using the following command:
```bash
cd mern-food-ordering-app-backend
```
Optionally you can run this command to open root folder inside vsc
```bash
code .
```
### Install Dependencies
Install the required dependencies using npm or Yarn:
```bash
npm install
# or
yarn install
```
### Setup Environment Variables
Create a .env file by copying the .env.example file:
```bash
cp .env.example .env
```


.env.example
```bash

#Copy content from this file and create your own .env file in a root folder then paste it and follow the next step
#These are only placeholders, make sure to populate everything with your own data so every feature can work.

#Mongodb connection string
#Follow instructions from following link (official documentation from mongodb)
#https://www.mongodb.com/resources/products/fundamentals/mongodb-connection-string#:~:text=How%20to%20get%20your%20MongoDB,connection%20string%20for%20your%20cluster.
MONGODB_CONNECTION_STRING=mongodb+srv://<username>:<password>@beyondthebasics.abcde.mongodb.net/test

# Auth0
#Auth0 config detaials you can get from Auth0 project
#Look for guide pictures in Readme file.
AUTH0_AUDIENCE=test-app-api #audience parameter of Auth0 API Project 
AUTH0_ISSUER_BASE_URL=https://dev-test.us.auth0.com/ #issuer base url parameter of Auth0 API Project 

#Cloudinary
#https://cloudinary.com/
CLOUDINARY_CLOUD_NAME =asfasr13 #cloud name lookup screenshot
CLOUDINARY_API_KEY =141567242781 #api key lookup screenshot
CLOUDINARY_API_SECRET =tadar52413asdfaf #api secret key lookupscreenshot

#Stripe
#https://stripe.com/
FRONTEND_URL =http://localhost:5173 #this is default for this app, if u change localhost port, change it here also
STRIPE_API_KEY =sk_test_test123test123test123test123test123test123test123test123test123test123test123test123 #Grab inside developers then API keys, secret key (reveal test key)
STRIPE_WEBHOOK_SECRET =whsec_test123test123test123test123test123test123test123test123 #Grab inside developers then webhooks
```

Step 1:
Follow instructions from following link (official documentation from mongodb)
https://www.mongodb.com/resources/products/fundamentals/mongodb-connection-string#:~:text=How%20to%20get%20your%20MongoDB,connection%20string%20for%20your%20cluster.
Get connection string and put it inside .env MONGODB_CONNECTION_STRING

Then go to https://auth0.com/ Create account or login with existing one, go to account, Applications, APIs, then create API, and from now follow screenshots and grab components data and put them in .env

![image](https://github.com/user-attachments/assets/5984f1ac-36c9-4280-aa8d-3e853f21ee16)

Step 2:

![image](https://github.com/user-attachments/assets/de2897a1-899c-4143-aac1-48d46e9bf563)

Step 3:
Go to https://cloudinary.com/ create account, go to settings, go to product environments, create one (max for free account), then go to Api Keys inside account settings and grab all 3 .env components (Look up screenshots)

![image](https://github.com/user-attachments/assets/9509d23f-cbeb-4b08-8f9e-ae855e2b643a)

Step 4:
Create Stripe account, then go to developers tab, under the API Keys tab grab the secret key and put it inside .env

![image](https://github.com/user-attachments/assets/a613d2a8-910b-491e-947e-1a1edbe04d67)

Step 5:
You have to create webhook that is used to redirect data back to you and call the endpoint so it updates the order information inside your database, go to developers tab, then to webhooks tab and add local listener
![image](https://github.com/user-attachments/assets/6ddce544-e458-4254-a9d0-d5e0f124b2b9)
After you complete step 5, u will end up on this page on next screenshot and u will have to setup stripe CLI using https://docs.stripe.com/stripe-cli, select your operating system and follow instructions. When you are done do step 6.

Step 6:
Grab your Strpe webhook secret from here for local machine.
![image](https://github.com/user-attachments/assets/8d17562a-213d-4cb6-8edc-3510793f7bdd)











