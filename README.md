User Management App

A simple React application for managing users, including functionalities to add, edit, and delete users. This app interacts with the [JSONPlaceholder API](https://jsonplaceholder.typicode.com/) for data storage.

## Features

- **Fetch Users**: Loads a list of users from a mock API (JSONPlaceholder).
- **Add User**: Allows adding new users.
- **Edit User**: Allows editing user details.
- **Delete User**: Allows deleting users.

## Tech Stack

- **Frontend**: React.js (Class Components)
- **CSS**: Custom styles for the UI
- **API**: JSONPlaceholder API for user data

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/user-management-app.git.

2 . Navigate to the project directory:

    cd user-management-app

3. Install dependencies:

    npm install


4. Start the application:

    npm start


5. Open your browser and go to http://localhost:3000 to view the application.

Usage
The app will display a list of users fetched from JSONPlaceholder when the page loads.
You can add a new user by filling out the form and clicking "Add User".
To edit a user, click the "Edit" button next to the user's details.
You can delete a user by clicking the "Delete" button next to the user's details.
API Endpoints
This app interacts with the following JSONPlaceholder API endpoints:

GET /users: Fetch all users.
POST /users: Add a new user.
PUT /users/{id}: Update an existing user.
DELETE /users/{id}: Delete a user.
License
This project is licensed under the MIT License - see the LICENSE file for details.

Contributing
Feel free to fork the repository, submit issues, or create pull requests if you find any bugs or want to improve the app.