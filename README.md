# Quote Posting Web Application


## Description

A simple web application that allows users to post, edit, and delete quotes. The application is built using Node.js and MongoDB.


## Features

- Post new quotes
- Edit existing quotes
- Delete quotes
- View all posted quotes


## Project Structure

- refer the Project Structure [here](./PROJECT_STRUCTURE.md).


## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/ramprasathmk/poet-app.git
    cd poet-app
    ```

2. **Install dependencies:**
    ```bash
    npm install
    ```

3. **Start MongoDB:** Ensure MongoDB is running locally. If you're using a local installation, start MongoDB with:
    ```bash
    mongod
    ```

4. **Start the application:**
    ```bash
    nodemon server.js
    ```

    otherwise, simply run the below **npm** command.

    ```bash
    npm start
    ```

5. **Build the application:** build the application and run the production build.
    ```bash
    npm run build
    ```

    ```bash
    npm run dev
    ```

6. **Pack the application:** packs application into `appname-version.tgz` file.
    ```bash
    npm pack
    ```

7. **Access the application:** Open your browser and navigate to http://localhost:3000


## Note

> - Create a `.env` file
> - Enter your port number, eg. PORT=3000
> - Then, enter your mongodb url, eg. MONGODB_LOCAL_URL=mongodb://127.0.0.1:27017/your_database_name
> - Here `db_name` would be varied, so kindly use the same db_name for the whole project.


## Sample Code:

1. `.env` file:
  
    ```text
    PORT=3000
    MONGODB_LOCAL_URL=mongodb://127.0.0.1:27017/quotes_db
    ```


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
