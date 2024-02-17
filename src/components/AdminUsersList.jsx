// src/components/AdminUsersList.js
import React, { useState, useEffect } from 'react';
import '../styles/AdminUsersList.scss';

const AdminUsersList = () => {
  const [adminUsers, setAdminUsers] = useState([]);

  useEffect(() => {
    fetch('/adminuser') // Proxy is used here
      .then(response => response.json())
      .then(data => setAdminUsers(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="admin-users-list">
      <h2>Admin Users List</h2>
      <ul>
        {adminUsers.map(user => (
          <li key={user._id}>{user.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default AdminUsersList;