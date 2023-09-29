import React from 'react';

// Define the handleShowNotificationClick function outside the component
function handleShowNotificationClick() {
  console.log('Checking for Notification API support');
  if ('Notification' in window && 'serviceWorker' in navigator) {
    console.log('Notification API and service worker are supported');

    if (Notification.permission === 'granted') {
      showNotification();
    } else if (Notification.permission !== 'denied') {
      Notification.requestPermission().then((result) => {
        if (result === 'granted') {
          showNotification();
        }
      });
    }
  } else {
    console.log('Notification API or service worker is not available in this browser.');
  }
}

function showNotification() {
  navigator.serviceWorker.ready.then((registration) => {
    registration.showNotification('Welcome to SnapBack', {
      body: 'Get ready to have a blast!',
      icon: 'icon192.png',
      vibrate: [200, 100, 200, 100, 200, 100, 200],
      tag: 'SnapBack',
    });
  });
}

function NotificationRequest() {
  return (
    <div>
      {/* <button className='text-white' onClick={() => handleShowNotificationClick(onNotification)}>
        Show Notification
      </button> */}
    </div>
  );
}

// Define the custom hook
export function useShowNotificationClick() {
  return handleShowNotificationClick;
}

export default NotificationRequest;
