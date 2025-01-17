# Quote | Poem Posting Web Application

[![CI](https://github.com/ramprasathmk/poet-app/actions/workflows/poet-app_test.yml/badge.svg)](https://github.com/ramprasathmk/poet-app/actions/workflows/poet-app_test.yml)

## Description

A simple web application that allows you to post, edit, and delete quotes. The application is built using Express and MongoDB.


## Features

- Post new quotes
- Edit existing quotes
- Delete quotes
- View all posted quotes

[node]: https://nodejs.org/en/download
[mongo]: https://www.mongodb.com/try/download/compass
[code]: https://code.visualstudio.com/download
[chrome]: https://www.google.com/chrome/


## Prerequsites
|  Tools    |  Version  |
|-----------|-----------|
| [Node.js][node]   |  20.10.0  |
| [MongoDB Compass][mongo]  |  7.x  |
| [Visual Studio Code][code] |  latest  |
| [Web Browser][chrome]  |  latest  |


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

3. **Create .env file:** Create the `config.env` file in root directory.
    ```text
    MONGODB_URI=mongodb+srv://<username>:<password>@sandbox.abcde.mongodb.net/db_name
    PORT=3000
    ```

4. **Check the MongoDB:** Ensure MongoDB is running locally.
    ```bash
    mongod
    ```

5. **Start the Server:**
    ```bash
    npm run dev
    ```

6. **Access the application:** Open your browser and navigate to http://localhost:3000


## Deployment

 - [Poet App](https://poet-app.onrender.com/)


## Usage

- Navigate to the home page to view all quotes.

- Use the form to "**Add**" a new quote.

- Click "**Edit**" to modify an existing quote.

- Click "**Delete**" to remove a quote.


## Technologies

- Bootstrap CSS

- Node.js

- Express.js

- MongoDB

- Mongoose

- EJS (Embedded JavaScript templates)

---

Feel free to modify this template to better suit your project’s specific needs. If you need further customization or have any questions, let me know!
