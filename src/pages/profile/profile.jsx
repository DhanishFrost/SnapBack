import React, { useState, useEffect } from 'react';
import { collection, doc, getDoc, query, where, getDocs } from "firebase/firestore";
import { auth, db } from '../../firebase_setup/firebase';
import EditProfile from './Editprofile';
import UpdatePassword from './UpdatePassword';
import DeleteAccount from './DeleteAccount';
import ProfilePhoto from './ProfilePhoto';
import CameraModal from './Camera';

function Profile() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [pastGames, setPastGames] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (authUser) => {
      if (authUser) {
        // User is signed in, retrieve user data from Firestore
        const userDocRef = doc(db, "users", authUser.uid);
        const userDocSnapshot = await getDoc(userDocRef);

        if (userDocSnapshot.exists()) {
          setUser({
            name: userDocSnapshot.data().name, // Get the user's name
            ...authUser, // Include other user data
          });
        } else {
          console.log('No such document in users collection!');
        }

        // Retrieve the logged-in user's past games
        const userScoresDocRef = doc(db, 'user_scores', authUser.uid);
        const userScoresDocSnapshot = await getDoc(userScoresDocRef);

        if (userScoresDocSnapshot.exists()) {
          const userData = userScoresDocSnapshot.data();
          const userScores = userData.score || [];

          setPastGames(userScores);
        } else {
          console.log('No such document for user scores!');
          setPastGames([]);
        }

        setLoading(false);
      } else {
        // User is signed out
        setUser(null);
        setLoading(false);
        setPastGames([]);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      console.log('Sign-out successful');
    }).catch((error) => {
      console.error('Error signing out:', error);
    });
  };

  if (loading) {
    return <p className='text-center text-white text-2xl'>Loading...</p>;
  }

  return (
    <div className="text-center py-8">
      {user ? (
        <div>
          <h1 className="text-3xl font-semibold text-white mb-4">
            Welcome, {user.name}
          </h1>
          <p className="text-white text-lg">Email: {user.email}</p>
          <button
            onClick={handleSignOut}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Sign Out
          </button>
          <ProfilePhoto user={user} />
          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-white mb-4">Your Past Games</h2>
            {pastGames.length > 0 ? (
              <ul className="text-white">
                {pastGames.map((game, index) => (
                  <li key={index} className="mb-2 py-2 inline-block ml-24">
                    <div className="bg-gray-500/50 inline px-4 py-1 rounded-md mr-2 text-lg font-[poppins]">
                      Game {index + 1}:
                    </div>
                    <span className='text-lg font-[poppins]'> Score {game.score}</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="text-white">You haven't played any games yet.</p>
            )}
          </div>

          <div className="mt-8">

            <EditProfile />
            <UpdatePassword />
            <DeleteAccount />
          </div>
        </div>
      ) : (
        <div>
          <h1 className="text-3xl font-semibold text-white mb-4">
            You are not signed in.
          </h1>
          <p className="text-white text-lg">
            Please sign in to view your profile.
          </p>
        </div>
      )}
    </div>
  );
}

export default Profile;
