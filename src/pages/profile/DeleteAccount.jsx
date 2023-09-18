import React, { useState } from 'react';
import { auth } from '../../firebase_setup/firebase';
import { deleteUser, EmailAuthProvider, reauthenticateWithCredential } from "firebase/auth";

function DeleteAccount() {
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleDeleteAccount = async (e) => {
        e.preventDefault();

        try {
            const user = auth.currentUser;
            const credential = EmailAuthProvider.credential(user.email, password);
            await reauthenticateWithCredential(user, credential);

            // Delete the user's account
            await deleteUser(user);

            // Delete the user's document in Firestore
            const userDocRef = doc(db, 'users', user.uid);
            await deleteDoc(userDocRef);


            console.log('Account deleted successfully!');
        } catch (error) {
            console.error('Error deleting account:', error);
            setError(error.message);
        }
    };

    return (
        <div>
            <h2>Delete Account</h2>
            <form onSubmit={handleDeleteAccount}>
                <label>
                    Current Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit">Delete Account</button>
            </form>
            {error && <p>{error}</p>}
        </div>
    );
}

export default DeleteAccount;
