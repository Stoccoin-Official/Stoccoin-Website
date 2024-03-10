import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NotFound from "./components/NotFound";
import { FaCircleNotch } from "react-icons/fa";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
const Homepage = lazy(() => import("./pages/Homepage"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Stocks = lazy(() => import("./pages/Stocks"));
const Cryptocurrencies = lazy(() => import("./pages/Cryptocurrencies"));
const News = lazy(() => import("./pages/News"));
const Trade = lazy(() => import("./pages/Trade"));
const Institutional = lazy(() => import("./pages/Institutional"));
const Derivatives = lazy(() => import("./pages/Derivatives"));
const NFT = lazy(() => import("./pages/NFT"));
const Support = lazy(() => import("./pages/Support"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Login = lazy(() => import("./pages/Login"));
import { auth } from "./firebase/auth";

const App = () => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const authorizeUser = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });

    return () => {
      authorizeUser();
    };
  }, [user]);

  // Always show the homepage regardless of user login status
  return (
    <div className="App">
      <BrowserRouter>
        <div className={darkMode ? "dark" : ""}>
          <div className="dark:bg-slate-900">
            <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
            <Suspense
              fallback={<FaCircleNotch className="spinner" size="5em" />}
            >
              <Routes>
                <Route path="/" element={<Homepage darkMode={darkMode} />} />
                <Route path="/Dashboard" element={<Dashboard />} />
                <Route
                  path="/Stocks"
                  element={<Stocks darkMode={darkMode} />}
                />
                <Route
                  path="/Cryptocurrencies"
                  element={<Cryptocurrencies darkMode={darkMode} />}
                />
                <Route path="/News" element={<News darkMode={darkMode} />} />
                <Route path="/NFT" element={<NFT />} />
                <Route path="/Trade" element={<Trade darkMode={darkMode} />} />
                <Route path="/Institutional" element={<Institutional />} />
                <Route path="/Derivatives" element={<Derivatives />} />
                <Route path="/Support" element={<Support />} />
                <Route path="/SignUp" element={<SignUp />} />
                <Route path="/Login" element={<Login />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
