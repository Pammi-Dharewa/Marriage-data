import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Presentation from './components/Presentation';
import Taken from './components/Taken';
import Footer from './components/Footer';
import Register from './components/Register';
import Otp from './components/Otp';
import QuerySidebar from './components/QuerySidebar';
import DashBoard from './components/DashBoard';

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  const hideLayout = location.pathname === '/get-otp' || location.pathname === '/register' || location.pathname === '/';

  return (
    <>
      {!hideLayout && <Navbar />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/presentation" element={<Presentation />} />
        <Route path="/register" element={<Register />} />
        <Route path='/get-otp' element={<Otp></Otp>}></Route>
        <Route path='/dashboard' element={<DashBoard></DashBoard>}></Route>
        <Route path="/taken" element={<Taken />} />
        <Route path='/query' element={<QuerySidebar></QuerySidebar>}/>
      </Routes>
      {!hideLayout && <Footer />}
    </>
  );
}

export default App;
