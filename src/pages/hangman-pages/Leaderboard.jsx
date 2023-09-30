import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../../firebase_setup/firebase';
import { getStorage, ref, uploadBytes, getDownloadURL, deleteObject } from "firebase/storage";

function Leaderboard() {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [profilePictureUrls, setProfilePictureUrls] = useState({});
    const baseUrl = process.env.NODE_ENV === "development" ? "/" : "/SnapBack/";

    useEffect(() => {
        async function fetchLeaderboardData() {
            try {
                const leaderboardRef = collection(db, 'user_scores');
                const leaderboardQuery = query(leaderboardRef);
                const leaderboardSnapshot = await getDocs(leaderboardQuery);

                const data = [];

                // Loop through all users
                leaderboardSnapshot.forEach(async (doc) => {
                    const userData = doc.data();
                    const userScores = userData.score || [];

                    // Find the highest score for this user
                    const highestScore = userScores.reduce((maxScore, scoreData) => {
                        return Math.max(maxScore, scoreData.score);
                    }, 0);

                    // Get the user's profile picture
                    const profilePictureRef = ref(
                        getStorage(),
                        `profilePictures/${doc.id}/profile-picture.jpg`
                    );

                    try {
                        const url = await getDownloadURL(profilePictureRef);
                        console.log('Profile picture URL:', url);
                        setProfilePictureUrls(prevUrls => ({
                            ...prevUrls,
                            [doc.id]: url
                        }));
                    } catch (error) {
                        if (error.code === 'storage/object-not-found') {
                            console.log('Profile picture not found for user with ID:', doc.id);
                        } else {
                            // Handle errors when the profile picture doesn't exist
                            console.log('Error fetching profile picture:', error);
                        }
                        profilePictureUrls[doc.id] = null;
                    }

                    // Push user data with highest score to the data array
                    data.push({
                        id: doc.id, // Use the user's UID as the ID
                        name: userData.name,
                        highestScore: highestScore,
                    });

                    if (data.length === leaderboardSnapshot.size) {
                        data.sort((a, b) => b.highestScore - a.highestScore); //Sort 
                        setLeaderboardData(data);
                        setLoading(false);
                    }
                });
            } catch (error) {
                console.error('Error fetching leaderboard data: ', error);
            }
        }

        fetchLeaderboardData();
    }, []);

    if (loading) {
        return <p className='text-center text-white text-2xl'>Loading leaderboard...</p>;
    }

    return (
        <div className='my-6'>
            <h1 className="text-5xl tracking-wide text-center font-semibold mb-4">
                <span className="bg-gray-800 px-8 lg:px-24 py-5 rounded-b-[50px] font-thin text-white font-[impact]">
                    Leaderboard
                </span>
            </h1>

            <div className="max-lg:mx-10 max-lg:space-y-2 lg:flex justify-center mb-6 mt-16">
                {leaderboardData.slice(0, 3).map((userData, index) => (
                    <div key={userData.id} className={`bg-${index === 0 ? 'yellow' : index === 1 ? 'gray' : 'orange'}-400 bg-opacity-70 px-6 py-4 ${index === 0 ? 'lg:rounded-l-lg' : index === 1 ? '' : 'lg:rounded-r-lg'} shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:scale-105 items-center flex`}>
                        {index === 0 && <img src={`${baseUrl}gold.png`} alt="Gold Medal" className="w-10 inline-block mr-2" />}
                        {index === 1 && <img src={`${baseUrl}silver.png`} alt="Silver Medal" className="w-10 inline-block mr-2" />}
                        {index === 2 && <img src={`${baseUrl}bronze.png`} alt="Bronze Medal" className="w-10 inline-block mr-2" />}
                        <div className="text-lg">
                            <span className="font-bold text-white">{index + 1}st</span>
                            <div className="text-white font-[poppins]">{userData.name}</div>
                            <div className="text-white font-[poppins]">{userData.highestScore} pts</div>
                        </div>
                        <div className="ml-4">
                            {profilePictureUrls[userData.id] ? (
                                <img src={profilePictureUrls[userData.id]} alt="Profile" className="rounded-full w-16 h-16 object-cover" />
                            ) : (
                                <i className='bi bi-person-fill max-lg:text-3xl text-5xl'></i>
                            )}
                        </div>
                    </div>
                ))}
            </div>



            <table className="table mx-auto max-lg:mx-2 md:w-[1200px]">
                <thead>
                    <tr className="text-white font-[poppins] text-lg">
                        <th className="py-2 px-4"># Rank</th>
                        <th className="py-2 px-4">Player Name</th>
                        <th className="py-2 px-4">Highest Score</th>
                    </tr>
                </thead>
                <tbody className='text-white '>
                    {leaderboardData.slice(3).map((userData, index) => (
                        <tr key={userData.id} className='rounded-lg bg-gray-700/30 text-center font-[poppins] text-lg'>
                            <td className="py-2 px-4">{index + 4}</td>
                            <td className="py-2 px-4 flex items-center justify-center">
                                <div>
                                    {profilePictureUrls[userData.id] ? (
                                        <img src={profilePictureUrls[userData.id]} alt="Profile" className="rounded-full max-lg:w-8 max-lg:h-8 w-12 h-12 object-cover" />
                                    ) : (
                                        <i className='bi bi-person-fill max-lg:text-3xl text-5xl'></i>
                                    )}
                                </div>
                                <div className="ml-2 overflow-hidden overflow-ellipsis whitespace-nowrap">
                                    {userData.name}
                                </div>
                            </td>
                            <td className="py-2 px-4">{userData.highestScore} <span className='text-md'>pts</span></td>
                        </tr>
                    ))}
                </tbody>
            </table>


        </div>

    );
}

export default Leaderboard;

