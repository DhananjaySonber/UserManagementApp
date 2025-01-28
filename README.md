User Management App

A React-based user management application that allows users to perform CRUD (Create, Read, Update, Delete) operations. This project demonstrates how to use React's state and lifecycle methods, handle form inputs, and manage API interactions.

Features

Fetch Users: Retrieve a list of users from an external API.

Add User: Add a new user to the system.

Edit User: Update user details.

Delete User: Remove a user from the system.

Error Handling: Display appropriate error messages when API requests fail.

Responsive Design: Optimized for various screen sizes.

Technologies Used

React: For building the user interface.

Fetch API: For making HTTP requests.

CSS: For styling the application.

JSONPlaceholder API: Used as a mock API for testing.

Setup and Installation

Clone the repository:

git clone https://github.com/your-username/user-management-app.git cd user-management-app

Install dependencies:

npm install

Start the development server:

npm start

Open the application in your browser:

http://localhost:3000

Usage

Fetch Users:

On application load, a list of users is fetched from the JSONPlaceholder API and displayed in a table.

Add User:

Fill in the "First Name," "Last Name," "Email," and "Department" fields.

Click the "Add User" button to add the user.

Edit User:

Click the "Edit" button next to a user in the table.

Update the fields and click "Update User" to save changes.

Delete User:

Click the "Delete" button next to a user to remove them from the list. 

API Endpoints

This application uses the JSONPlaceholder API as a mock backend:

GET https://jsonplaceholder.typicode.com/users: Fetch all users.

POST https://jsonplaceholder.typicode.com/users: Add a new user.

PUT https://jsonplaceholder.typicode.com/users/:id: Update an existing user.

DELETE https://jsonplaceholder.typicode.com/users/:id: Delete a user.

Limitations

JSONPlaceholder API does not persist data. Any added, updated, or deleted users will not be reflected on a page refresh.


License

This project is licensed under the MIT License.