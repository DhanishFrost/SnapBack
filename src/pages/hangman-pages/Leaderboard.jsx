import React, { useState, useEffect } from 'react';
import { collection, query, orderBy, limit, getDocs } from 'firebase/firestore';
import { db } from '../../firebase_setup/firebase';

function Leaderboard() {
    const [leaderboardData, setLeaderboardData] = useState([]);
    const [loading, setLoading] = useState(true);

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

            <table className="table mx-auto max-lg:mx-2 md:w-[1200px] mt-16">
                <thead>
                    <tr className="text-white font-[poppins] text-md">
                        <th className="py-2 px-4"># Rank</th>
                        <th className="py-2 px-4">Player Name</th>
                        <th className="py-2 px-4">Highest Score</th>
                    </tr>
                </thead>
                <tbody className='text-white '>
                    {leaderboardData.map((userData, index) => (
                        <tr key={userData.id} className='rounded-lg bg-gray-700/30 text-center font-[poppins] text-lg'>
                            <td className="py-2 px-4">
                                {index === 0 && <img src="/gold.png" alt="Gold Medal" className="w-7 inline-block mr-2" />}
                                {index === 1 && <img src="/silver.png" alt="Silver Medal" className="w-7 inline-block mr-2" />}
                                {index === 2 && <img src="/bronze.png" alt="Bronze Medal" className="w-7 inline-block mr-2" />}
                                {index + 1}</td>
                            <td className="py-2 px-4">
                                {userData.name}
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

