import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Compnents/Index/Home";
import Login from "./Compnents/Login/Login";
import Signup from "./Compnents/Signup/Signup";
import NoPage from "./Compnents/NoPage";

function App() {
  return (
    <div>
    
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
        <Route index element={<Home />} />
        <Route path="login" element={<Login />} />
        <Route path="signup" element={<Signup />} />
        <Route path="*" element={<NoPage />} /> 
      
    </Routes>
  </BrowserRouter>
  </div>
  );
}

export default App;