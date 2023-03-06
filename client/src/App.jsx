import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './routes/login'
import Register from './routes/register'
import Profil from './routes/profil'
import Home from './routes/home';
import Logout from './routes/logout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="logout" element={<Logout />} />
          <Route path="login" element={<Login />} />
          <Route path="create-account" element={<Register />} />
          <Route path="profil" element={<Profil />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
