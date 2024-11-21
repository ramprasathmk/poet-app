# Project Structure

## Directories

- **models**
  - poem.js: Defines the Poem schema using Mongoose.
- **routes**
  - poems.js: Sets up routes for CRUD operations.
- **controllers**
  - poemsController.js: Manages the logic of your application.
- **views**
  - index.ejs: Renders the poems.
- **tests**
  - app.test.js: Test the Express server.


## Files

- **.env**
  - Contains environment variables.
- **.gitignore**
  - Contains the Git ignored files and directories.
- **jest.config.js**
  - Test configuration are defined here. 
- **jsconfig.json**
  - Contains javascript environment configurations.
- **server.js**
  - Sets up the Express server and connects to MongoDB.


## Example Structure

```m
/poet-app
│   .env
│   .gitignore
│   jest.config.js
│   jsconfig.json
│   package-lock.json
│   package.json
│   README.md
│   PROJECT_STRUCTURE.md
│   server.js
|
└─── /models
│   └── poem.js
|
└─── /routes
│   └── poems.js
|
└─── /controllers
│   └── poemsController.js
|
└─── /views
│   ├── index.ejs
│   ├── edit.ejs
│   └── search.ejs
|
└─── /public
|   └── styles.css
|
└─── /tests
    └── app.test.js
```
