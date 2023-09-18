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
            <h2 className='text-white'>Edit Profile</h2>
            <form>
                <label className='text-white'>
                    Display Name:
                    <input className='text-black'
                        type="text"
                        value={displayName}
                        onChange={(e) => setDisplayName(e.target.value)}
                    />
                </label>
                <br />
                <button className='text-white' type="button" onClick={handleUpdateDisplayName}>Update Display Name</button>
            </form>
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
