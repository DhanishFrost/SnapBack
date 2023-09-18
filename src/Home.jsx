import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


function TypewriterText({ text }) {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayedText(text.substring(0, currentIndex + 1));
        setCurrentIndex(currentIndex + 1);
      } else {
        clearInterval(interval);
      }
    }, 15);

    return () => {
      clearInterval(interval);
    };
  }, [text, currentIndex]);

  return <p className='lg:mr-56 font-sans text-lg md:text-xl mt-4 text-gray-300 max-w-3xl'>{displayedText}</p>;
}

export default function Home() {
  return (
    <>
      <div>
        <section className="relative h-[600px]">
          {/* Video Background */}
          <video
            autoPlay
            loop
            muted
            className="absolute inset-0 w-full h-full object-cover brightness-75"
            src="/intro.mp4"
          ></video>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white">
            <div>
              <h6 className="font-[poppins] text-xl md:text-lg font-semibold">
                Welcome to SnapBack - Indulge in the exquisite world of gaming
              </h6>
            </div>
            <div className="mt-4">
              <h1 className="text-4xl md:text-9xl uppercase tracking-widest font-bold font-[poppins]">SnapBack</h1>
            </div>
            <div className='border border-white p-2 mt-3'>
              <Link to="/SnapBack/games">
                <button className="btn2 py-4 px-14 bg-gradient-to-r from-gray-700 to-gray-900 text-white border border-gray-600 rounded-sm relative uppercase font-semibold tracking-wider leading-none overflow-hidden hover:bg-transparent hover:shadow-xl transition-transform transform hover:scale-105" type="button">
                  <span className="absolute inset-0 bg-gray-500/30"></span>
                  <span className="text-white absolute inset-0 flex justify-center items-center font-bold">
                    Play now
                  </span>
                  Play now
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Additional Content */}
        <div className="md:grid md:grid-rows-2 mb-12 grid-cols-3 gap-10 mt-6 lg:mt-24 max-lg:mx-2 lg:mx-36">
          <div className='relative col-span-2 h-96 group'>
            <img
              src="/homecod.jpg"
              alt="COD"
              className="border border-gray-600 brightness-50 rounded-md w-full h-full object-cover transition-transform ease-in-out transform scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 flex flex-col justify-center text-white ml-4 lg:ml-8">
              <h2 className="text-4xl md:text-3xl font-extrabold font-[impact]">
                Explore Gaming with SnapBack
              </h2>
              <TypewriterText
                text="Join our elite community of passionate gamers. Explore the latest games, connect with fellow enthusiasts, and dominate the leaderboards in epic tournaments."
              />
            </div>
          </div>

          <div className="text-white row-span-2 col-span-1">
            <h2 className='uppercase font-[impact] text-5xl max-lg:mt-6'>News</h2>
            <hr className="mb-4 mt-2 border-t-2 border-gray-300" />
            <img src="/assassins-creed-valhalla.jpg" alt="Assassins creed image" className='w-full object-cover' />
            <h2 className='text-2xl lg:text-4xl mt-3 md:text-3xl font-thin font-[impact]'>
              Top Games : Everything You Need To Know
            </h2>
            <hr className="my-5 border-t-2 border-gray-300" />
            <div className='flex'>
              <img src="/assassins-creed-valhalla.jpg" alt="Assassins creed image" className='object-cover w-36' />
              <div>
                <h1 className='text-xl font-light tracking-wide ml-4 font-[impact]'>Assassin's Creed Valhalla</h1>
                <p className=' font-serif tracking-wide ml-4 mt-2'>Embark on epic Viking adventures during the 9th century in England.</p>
              </div>
            </div>
            <hr className="my-6 border-t-2 border-gray-300" />
            <div className='flex'>
              <img src="/forza5.jpg" alt="Forza 5 image" className='object-cover w-36' />
              <div>
                <h1 className='text-xl font-light tracking-wide ml-4 font-[impact]'>Forze Horizon 5</h1>
                <p className=' font-serif tracking-wide ml-4 mt-2'>Race through stunning landscapes in the world's most exotic cars.</p>
              </div>
            </div>
            <hr className="my-6 border-t-2 border-gray-300" />
            <div className='flex'>
              <img src="/rdr2.jpg" alt="RDR 2 image" className='object-cover w-36' />
              <div>
                <h1 className='text-xl font-light tracking-wide ml-4 font-[impact]'>Red Dead Redemption 2</h1>
                <p className=' font-serif tracking-wide ml-4 mt-2'>Step into an untamed Wild West filled with outlaws and gunfights.</p>
              </div>
            </div>


          </div>
          <div className='relative group max-lg:mt-8 rounded-md'>
            <img src="/spiderman.jpg" alt="Your Image" className="brightness-75 w-full h-full object-cover transition-transform ease-in-out transform scale-100 group-hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-center ml-8 text-white">
              <p className="max-lg:text-xl text-2xl font-semibold font-[impact] tracking-wide">SNAPBACK</p>
              <p className="max-lg:text-2xl text-4xl font-thin font-[impact] mt-4">Embrace the Challenge, Take the Fight with You!</p>
              <Link to="/SnapBack/games">
                <button className="btn2 mt-4 py-4 px-14 bg-gradient-to-r from-gray-700 to-gray-900 text-white border border-gray-600 rounded-sm relative uppercase font-semibold tracking-wider leading-none overflow-hidden hover:bg-transparent hover:shadow-xl transition-transform transform hover:scale-105" type="button">
                  <span className="absolute inset-0 bg-gray-500/30"></span>
                  <span className="text-white absolute inset-0 flex justify-center items-center font-bold">
                    Play now
                  </span>
                  Play now
                </button>
              </Link>
            </div>
          </div>

          <div className='relative group max-lg:mt-6 rounded-md'>
            <img src="/cod2nd.webp" alt="Your Image" className="brightness-75 w-full h-full object-cover transition-transform ease-in-out transform scale-100 group-hover:scale-105" />
            <div className="absolute inset-0 flex flex-col justify-center ml-8 text-white">
              <p className="max-lg:text-xl text-2xl font-semibold font-[impact] tracking-wide">SNAPBACK</p>
              <p className="max-lg:text-2xl text-4xl font-thin font-[impact] mt-4">Unlock Your Gaming Potential, Conquer the Virtual Realm!.</p>
              <Link to="/SnapBack/games">
                <button className="btn2 mt-4 py-4 px-14 bg-gradient-to-r from-gray-700 to-gray-900 text-white border border-gray-600 rounded-sm relative uppercase font-semibold tracking-wider leading-none overflow-hidden hover:bg-transparent hover:shadow-xl transition-transform transform hover:scale-105" type="button">
                  <span className="absolute inset-0 bg-gray-500/30"></span>
                  <span className="text-white absolute inset-0 flex justify-center items-center font-bold">
                    Play now
                  </span>
                  Play now
                </button>
              </Link>
            </div>
          </div>

        </div>

        {/* Footer */}
        <footer className="h-96 bg-black text-white py-12">
          <div className="container mx-auto flex flex-col items-center justify-center">

            <div className="flex lg:space-x-4 font-[impact] text-gray-200/50 tracking-wide">
              <a href="#" className="lg:pr-6 hover:text-gray-400 transition-colors duration-300">
                Privacy Policy
              </a>
              <div className='w-0.5 h-4 mt-1.5 max-lg:mx-2 bg-gray-200/50'></div>
              <a href="#" className="lg:px-6 hover:text-gray-400 transition-colors duration-300">
                Terms of Service
              </a>
              <div className='w-0.5 h-4 mt-1.5 max-lg:mx-2 bg-gray-200/50'></div>
              <a href="#" className="lg:px-6 hover:text-gray-400 transition-colors duration-300">
                Support
              </a>
              <div className='w-0.5 h-4 mt-1.5 max-lg:mx-2 bg-gray-200/50'></div>
              <Link
                to="/SnapBack/games"
                className=""
              >
                Games
              </Link>
            </div>
            <div className="relative mb-10 m-8 flex items-center mx-auto">
              <div className="w-[400px] lg:w-[900px] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
            <div className='flex space-x-12'>
              <img className="w-20" src="/Snapback-Logo.png" alt="SnapBack Logo" />
              <img className="w-36" src="/esrb.svg" alt="ESRB Logo" />
            </div>
            <div className="relative mb-10 m-8 flex items-center mx-auto">
              <div className="w-[400px] lg:w-[900px] h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>
            </div>
            <p className="px-6 text-lg font-thing tracking-wider mb-2 font-[impact]">&copy; {new Date().getFullYear()} SnapBack. All Rights Reserved.</p>
          </div>
        </footer>
      </div>
    </>
  );
}
