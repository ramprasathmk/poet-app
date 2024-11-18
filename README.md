# Poet Posting Web Application

## Description

A simple web application that allows users to post, edit, and delete poems. The application is built using Node.js and MongoDB.

## Features

- Post new poems
- Edit existing poems
- Delete poems
- View all posted poems

## Project Structure

```m
/poet-app
│   package.json
│   server.js
└─── /models
│   └── poem.js
└─── /routes
│   └── poems.js
└─── /controllers
│   └── poemsController.js
└─── /views
│   ├── index.ejs
│   └── edit.ejs
│   └── search.ejs
└─── /public
    └── styles.css
```

## Setup

1. **Clone the repository:**
    ```bash
    git clone https://github.com/your-username/poet-app.git
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

5. **Access the application:** Open your browser and navigate to http://localhost:3000

## Usage

- Navigate to the home page to view all poems.

- Use the form to add a new poem.

- Click "Edit" to modify an existing poem.

- Click "Delete" to remove a poem.


## Technologies Used

- Node.js

- Express.js

- MongoDB

- Mongoose

- EJS (Embedded JavaScript templates)

## License
This project is licensed under the MIT License.

Feel free to modify this template to better suit your project’s specific needs. If you need further customization or have any questions, let me know!
