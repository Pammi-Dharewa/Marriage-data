// App.jsx
import { BrowserRouter, Routes, Route, Outlet } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Presentation from './components/Presentation';
import Taken from './components/Taken';
// import Footer from './components/Footer';
import Register from './components/Register';
import Otp from './components/Otp';
import QuerySidebar from './components/QuerySidebar';
import DashBoard from './components/DashBoard';
import SideBar from './components/SideBar';
import Support from './components/Support';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Auth/Layout routes (no Sidebar or Footer) */}
        <Route element={<AuthLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/get-otp" element={<Otp />} />
          <Route path='/dashboard/support' element={<Support></Support>}></Route>
        </Route>
        {/* Dashboard/Layout routes (with Sidebar, Navbar) */}
        <Route element={<DashboardLayout />}>
          <Route path="/presentation" element={<Presentation />} />
          <Route path="/dashboard" element={<DashBoard />} />
          <Route path="/taken" element={<Taken />} />
          <Route path="/query" element={<QuerySidebar />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function DashboardLayout() {
  return (
    <>
      <div className="dashboard-container" style={{ display: 'flex' }}>
        <SideBar />
        <div className="content" style={{ flex: 1, padding: '20px' }}>
          <Outlet />
        </div>
      </div>
      {/* <Footer /> */}
    </>
  );
}

function AuthLayout() {
  return <Outlet />;
}

export default App;
