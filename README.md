# Poet App

Poet App is a simple web application that allows users to post, edit, and delete quotes or poems. Built using Express.js and MongoDB, it provides a straightforward interface for managing literary entries.

[![CI Status](https://github.com/ramprasathmk/poet-app/actions/workflows/poet-app_test.yml/badge.svg)](https://github.com/ramprasathmk/poet-app/actions/workflows/poet-app_test.yml)


## Table of Contents

- [Features](#features)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Contributing](#contributing)

[//]: # (- [License]&#40;#license&#41;)

## Features

- **Post Quotes/Poems**: Add new literary entries to the collection.
- **Edit Entries**: Modify existing quotes or poems.
- **Delete Entries**: Remove entries from the collection.
- **View All Entries**: Browse through all posted quotes and poems.

## Prerequisites

Before you begin, ensure you have the following tools installed:

- **Node.js**: `>= 20.10.0`
- **MongoDB Compass**: `>= 7.x`
- **Visual Studio Code**: `latest`

## Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/ramprasathmk/poet-app.git
   ```

2. **Navigate to the Project Directory**:

   ```bash
   cd poet-app
   ```

3. **Install Dependencies**:

   ```bash
   npm install
   ```

## Usage

1. **Start the Application**:

   ```bash
   npm start
   ```

2. **Access the Application**:

   Open your browser and navigate to `http://localhost:3000` to start using the Poet App.

## Project Structure

The project follows a standard MVC (Model-View-Controller) architecture:

- `controllers/`: Contains the logic for handling requests and responses.
- `models/`: Defines the data schemas and interacts with the database.
- `routes/`: Manages the routing of HTTP requests.
- `views/`: Holds the EJS templates for rendering the frontend.
- `public/`: Includes static assets like CSS and JavaScript files.

## Contributing

Contributions are welcome! If you have suggestions or improvements, please fork the repository and submit a pull request.

[//]: # (## License)

[//]: # ()
[//]: # (This project is licensed under the MIT License. See the [LICENSE]&#40;LICENSE&#41; file for details.)

---

Thank you for using Poet App! Feel free to explore, contribute, and share your favorite quotes and poems. 