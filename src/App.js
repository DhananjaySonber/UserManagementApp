import './App.css';
import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      error: null,
      currentUser: { id: '', firstName: '', lastName: '', email: '', department: '' },
      isEditing: false,
    };
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) {
        throw new Error('Failed to fetch users');
      }
      const data = await response.json();
      this.setState({ users: data });
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      currentUser: { ...prevState.currentUser, [name]: value },
    }));
  };

  handleAddUser = async () => {
    try {
      const { currentUser } = this.state;
      const response = await fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentUser),
      });
      if (!response.ok) {
        throw new Error('Failed to add user');
      }
      const newUser = await response.json();
      this.setState((prevState) => ({
        users: [...prevState.users, newUser],
        currentUser: { id: '', firstName: '', lastName: '', email: '', department: '' },
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  handleEditUser = (user) => {
    this.setState({ currentUser: user, isEditing: true });
  };

  handleUpdateUser = async () => {
    try {
      const { currentUser } = this.state;
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${currentUser.id}`, {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(currentUser),
      });
      if (!response.ok) {
        throw new Error('Failed to update user');
      }
      const updatedUser = await response.json();
      this.setState((prevState) => ({
        users: prevState.users.map((user) => (user.id === updatedUser.id ? updatedUser : user)),
        currentUser: { id: '', firstName: '', lastName: '', email: '', department: '' },
        isEditing: false,
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  handleDeleteUser = async (id) => {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete user');
      }
      this.setState((prevState) => ({
        users: prevState.users.filter((user) => user.id !== id),
      }));
    } catch (error) {
      this.setState({ error: error.message });
    }
  };

  render() {
    const { users, error, currentUser, isEditing } = this.state;

    return (
      <div className="container">
        <h1>User Management</h1>
        {error && <p className="error">{error}</p>}
        <div>
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={currentUser.firstName}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={currentUser.lastName}
            onChange={this.handleInputChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={currentUser.email}
            onChange={this.handleInputChange}
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={currentUser.department}
            onChange={this.handleInputChange}
          />
          {isEditing ? (
            <button className="button" onClick={this.handleUpdateUser}>Update User</button>
          ) : (
            <button className="button" onClick={this.handleAddUser}>Add User</button>
          )}
        </div>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Department</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td>{user.id}</td>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{user.email}</td>
                <td>{user.department}</td>
                <td>
                  <button onClick={() => this.handleEditUser(user)}>Edit</button>
                  <button onClick={() => this.handleDeleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;