import React, { useState } from 'react';
import { auth } from '../../firebase_setup/firebase';
import { updatePassword } from "firebase/auth";

function UpdatePassword() {
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState(null);

  const handleUpdatePassword = async (e) => {
    e.preventDefault();

    try {
      await updatePassword(auth.currentUser, newPassword);
      console.log('Password updated successfully!');
    } catch (error) {
      console.error('Error updating password:', error);
      setError(error.message);
    }
  };

  return (
    <div>
      <h2>Update Password</h2>
      <form onSubmit={handleUpdatePassword}>
        <label>
          New Password:
          <input
            type="password"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Update Password</button>
      </form>
      {error && <p>{error}</p>}
    </div>
  );
}

export default UpdatePassword;
