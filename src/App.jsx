import React, { useState } from 'react';
import TastemapRouter from './components/nav/TastemapRouter';
import LoginStatusContext from './components/contexts/LoginStatus';

export default function App() {
  const [liked, setLiked] = useState([]);

  const [loginStatus, setLoginStatus] = useState(() => {
    const stored = sessionStorage.getItem("loginStatus");
    return stored ? JSON.parse(stored) : { username: null };
  });

  const toggleLiked = (can) => {
    setLiked(prev => {
      if (prev.some(r => r.id === can.id)) {
        return prev.filter(r => r.id !== can.id);
      } else {
        return [...prev, can];
      }
    });
  };


  return (
    <LoginStatusContext.Provider value={[loginStatus, setLoginStatus]}>
      <TastemapRouter
        liked={liked}
        toggleLiked={toggleLiked}
      />
    </LoginStatusContext.Provider>
  );
}