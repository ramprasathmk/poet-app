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

## Files

- **server.js**
  - Sets up the Express server and connects to MongoDB.

## Example Structure

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
