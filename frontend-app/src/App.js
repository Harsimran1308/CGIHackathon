import logo from './logo.svg';
import './App.css';

import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignInSide from './components/Signin';
import SignUp from './components/signup';
import Dashboard from './components/Dashboard';


function App() {
  return (
    <div className="App">
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignInSide />}></Route>
          <Route path="signup" element={<SignUp />}></Route>
          <Route path="dashboard" element={<Dashboard />}></Route>

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
