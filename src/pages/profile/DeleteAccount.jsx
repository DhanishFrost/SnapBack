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
            {error && <p>{error}</p>}
            <form onSubmit={handleDeleteAccount}>
                <div className="relative max-lg:mx-4">
                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                        <i className="bi bi-lock text-gray-300 mt-1.5"></i>
                    </div>
                    <input
                        className="w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-[#1a1a1a] text-white pl-10"
                        placeholder='Current Password'
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <div className="my-4">
                    <button
                        className="border border-red-700 hover:bg-red-900 text-white font-bold py-2 px-4 rounded"
                        type="submit"
                    >
                        Delete Account
                    </button>
                </div>
            </form>
        </div>
    );
}

export default DeleteAccount;
