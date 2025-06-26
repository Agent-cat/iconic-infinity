import React, { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import { useNavigate, useLocation } from "react-router-dom";
import Navroutes from "./routes/Navroutes";
import Loader from "./components/Loader";
import ScrollToTop from "./components/ScrollToTop"; // Import ScrollToTop
import GoldenDustBackground from "./components/GoldenDustBackground";
import CursorFollower from "./components/CursorFollower";

const App = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 4000);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleLogin = (userData) => {
    setUser(userData);
    localStorage.setItem("user", JSON.stringify(userData));
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setUser(null);
    navigate("/");
  };

  return (
    <div className="App text-white bg-black overflow-x-hidden">
      <GoldenDustBackground />
      <ScrollToTop />
      <CursorFollower />
      {loading && <Loader />}
      <Navbar user={user} onLogout={handleLogout} />
      <div className="">
        <Navroutes onLogin={handleLogin} user={user} />
      </div>
    </div>
  );
};

export default App;
