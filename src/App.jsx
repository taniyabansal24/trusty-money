import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HomePage from './pages/HomePage';
import SignInPage from './pages/SigninPage';
import SignUpPage from './pages/SignupPage';
import JoinUsPage from './pages/JoinUsPage';



function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Home route */}
          <Route path="/" element={<HomePage/>} />
          
          {/* Sign-up route */}
          <Route path="/sign-up" element={<SignUpPage/>} />
          
          {/* Sign-in route */}
          <Route path="/sign-in" element={<SignInPage />} />

          {/* Join-us route */}
          <Route path="/join-us" element={<JoinUsPage/>} />
          
          {/* Redirect any unknown routes to home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;