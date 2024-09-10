import './App.css';
import SignUp from './components/Signup';
import SignIn from './components/Signin';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route exact path='/SignIn' element={<SignIn/>} />
        <Route exact path='/SignUp' element={<SignUp/>}/>
      </Routes>
    </Router>
  );
}

export default App;
