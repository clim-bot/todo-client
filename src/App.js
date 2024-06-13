import React, { useState } from 'react';
import Auth from './components/Auth';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [token, setToken] = useState('');

  const handleLogin = (newToken) => {
    setToken(newToken);
  };

  return (
    <div className="App">
      {token ? (
        <TaskList token={token} />
      ) : (
        <Auth onLogin={handleLogin} />
      )}
    </div>
  );
}

export default App;
