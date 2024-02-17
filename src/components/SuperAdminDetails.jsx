// src/components/SuperAdminDetails.js
import React, { useState, useEffect } from 'react';
import '../styles/SuperAdminDetails.scss';

const SuperAdminDetails = () => {
  const [superAdmin, setSuperAdmin] = useState({});

  useEffect(() => {
    fetch('/superadmin') // Proxy is used here
      .then(response => response.json())
      .then(data => setSuperAdmin(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className="super-admin-details">
      <h2>Super Admin Details</h2>
      <p>Max Reservations: {superAdmin.max_reservations}</p>
      <p>Max Duration: {superAdmin.max_duration}</p>
      <p>Billing of Court: {superAdmin.billing_of_court}</p>
      <p>Email Notification: {superAdmin.email_notification ? 'Enabled' : 'Disabled'}</p>
    </div>
  );
};

export default SuperAdminDetails;
