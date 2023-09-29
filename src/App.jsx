import React, { useState, useEffect } from 'react';
import { Routes, useNavigate } from 'react-router-dom';
import NavigationLayout from './Layout/NavigationLayout';
import AppRoutes from './Routes';
import './index.css';
import { auth } from './firebase_setup/firebase';
import { onAuthStateChanged } from 'firebase/auth';
import LogoutConfirmationModal from './pages/auth/LogoutConfirmationModal';

function App() {
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('authToken') === 'true');
  const [user, setUser] = useState(null);
  const [logoutConfirmationOpen, setLogoutConfirmationOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is logged in
        setUser(user);
        setLoggedIn(true);
        localStorage.setItem('authToken', true);
      } else {
        // User is not logged in
        setUser(null);
        setLoggedIn(false);
        localStorage.removeItem('authToken');
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    setLogoutConfirmationOpen(true);
  };

  const confirmLogout = async () => {
    try {
      await auth.signOut();
      setUser(null);
      setLoggedIn(false);
      localStorage.removeItem('authToken');
      navigate("/SnapBack/");
    } catch (error) {
      console.log(error);
    } finally {
      setLogoutConfirmationOpen(false);
    }
  };

  return (
    <div>
      <div>
        <NavigationLayout loggedIn={loggedIn} onLogin={setLoggedIn} handleLogout={handleLogout} />
      </div>
      <div>
        <AppRoutes loggedIn={loggedIn} onLogin={setLoggedIn}/>  
      </div>
      {logoutConfirmationOpen && (
        <div className="modal-overlay">
          <LogoutConfirmationModal
            isOpen={logoutConfirmationOpen}
            onRequestClose={() => setLogoutConfirmationOpen(false)}
            onConfirm={confirmLogout}
          />
          </div>
      )}
    </div>
  );
}

export default App;
