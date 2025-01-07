# Quote | Poem Posting Web Application

[![CI](https://github.com/ramprasathmk/poet-app/actions/workflows/poet-app_test.yml/badge.svg)](https://github.com/ramprasathmk/poet-app/actions/workflows/poet-app_test.yml)

## Description

A simple web application that allows users to post, edit, and delete quotes. The application is built using Node.js and MongoDB.


## Features

- Post new quotes
- Edit existing quotes
- Delete quotes
- View all posted quotes


## Prerequsites

- Node.js
- MongoDB Compass
- Visual Studio Code
- Web Browser (eg. chrome)


## How To Run

1. **Clone the repo:**
    ```bash
    git clone https://github.com/ramprasathmk/poet-app.git
    cd poet-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Create .env file:** Create the file ./config.env with your Atlas URI and the server port:
    ```text
    MONGODB_URI=mongodb+srv://<username>:<password>@sandbox.jadwj.mongodb.net/db_name
    PORT=3000
    ```

4. **Check the MongoDB:** Ensure MongoDB is running locally. If you're using a local installation, start MongoDB with:
    ```bash
    mongod
    ```

5. **Start the Server:**
    ```bash
    npm run dev
    ```

6. **Build the application:** build the application and run the production build.
    ```bash
    npm run build
    ```

7. **Access the application:** Open your browser and navigate to http://localhost:3000


## Note

- Creating the `.env` file is mandatory.
- Provide the valid database name instead of `db_name`.  eg. `quote_db`


## Deployment

 - [Poet App](https://poet-app.onrender.com/)


## Usage

- Navigate to the home page to view all quotes.

- Use the form to add a new quote.

- Click "Edit" to modify an existing quote.

- Click "Delete" to remove a quote.


## Technologies Used

- Bootstrap CSS

- Node.js

- Express.js

- MongoDB

- Mongoose

- EJS (Embedded JavaScript templates)


## Contributing

Feel free to modify this template to better suit your project’s specific needs. If you need further customization or have any questions, let me know!
