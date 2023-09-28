import React, { useState, useEffect } from 'react';
import { auth, db } from '../../firebase_setup/firebase';
import { getAuth, updateProfile, updateEmail, sendEmailVerification } from 'firebase/auth';
import { collection, doc, getDoc, updateDoc } from 'firebase/firestore';

function EditProfile() {
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [user, setUser] = useState(null);
    const [verificationSent, setVerificationSent] = useState(false);

    useEffect(() => {
        // Listen for changes in the authentication state
        const unsubscribe = auth.onAuthStateChanged((authUser) => {
            if (authUser) {
                setUser(authUser);
                setDisplayName(authUser.displayName || '');
                setEmail(authUser.email || '');
            } else {
                setUser(null);
                setDisplayName('');
                setEmail('');
            }
        });

        // Unsubscribe from the listener when the component unmounts
        return () => {
            unsubscribe();
        };
    }, []);

    const handleUpdateDisplayName = async () => {
        const auth = getAuth(); // Initialize Firebase Auth

        try {

            // Update display name in Firestore
            const userDocRef = doc(db, 'users', user.uid);
            await updateDoc(userDocRef, {
                name: displayName,
            });

            console.log('Display name updated successfully!');
        } catch (error) {
            console.error('Error updating display name:', error);
        }
    };

    const handleSendVerification = async () => {
        const auth = getAuth(); // Initialize Firebase Auth

        try {

            await sendEmailVerification(auth.currentUser, actionCodeSettings);

            setVerificationSent(true);

            console.log('Email verification link sent to the new email address.');
        } catch (error) {
            console.error('Error sending email verification link:', error);
        }
    };

    const handleUpdateEmail = async () => {
        const auth = getAuth(); // Initialize Firebase Auth

        try {

            // Update email address in authentication 
            await updateEmail(auth.currentUser, email);

            console.log('Email address updated successfully!');
        } catch (error) {
            console.error('Error updating email address:', error);
        }
    };

    return (
        <div >
            <div className="mt-8">
                <h2 className="text-2xl font-semibold text-white ">Edit Profile</h2>
                <form>
                    {/* <div className="mb-4">
                        <p className='text-white'>Display Name: </p>
                        <input
                            className="border-2 border-black text-black rounded px-3 py-2"
                            type="text"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                        />

                    </div> */}
                    <div class="relative max-lg:mx-4">
                        <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                            <i class="bi bi-person text-gray-300 mt-1.5"></i>
                        </div>
                        <input
                            className="w-full px-4 py-3 border-0 border-b-2 hover:border-b-blue-500 mt-2 bg-[#1a1a1a] text-white pl-10"
                            type="text"
                            value={displayName}
                            onChange={(e) => setDisplayName(e.target.value)}
                            />
                    </div>

                    <div className="my-4">
                        <button
                            className="border border-teal-700 hover:bg-teal-900 text-white font-bold py-2 px-4 rounded"
                            type="button"
                            onClick={handleUpdateDisplayName}
                        >
                            Update Display Name
                        </button>
                    </div>
                </form>
            </div>

            {/* <form>
                <label className='text-white'>
                    Email:
                    <input className='text-black'
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <button className='text-white' type="button" onClick={handleUpdateEmail}>Update Email</button>
            </form> */}
        </div>
    );
}

export default EditProfile;
