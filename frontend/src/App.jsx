import React, { useState, useEffect } from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Login from "./components/Login";
import Homepage from "./pages/Homepage";
import MainLayout from "./layouts/MainLayout";
import Datapage from "./pages/Datapage";
import Simulation from "./pages/Simulation";
import LearningCenter from "./pages/LearningCenter";
import GuideInfoPage from "./pages/GuideInfoPage";
import NotFoundPage from "./pages/NotFoundPage";
import News from "./pages/News";

import "bootstrap/dist/css/bootstrap.min.css";
// Import AOS and AOS CSS
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 2000, // Values from 0 to 3000, with step 50ms
    });
  }, []);
  const [isLoggedIn, setLoggedIn] = useState(false);

  useEffect(() => {
    // Check if user is logged in when the app loads
    const loggedInStatus = localStorage.getItem("isLoggedIn") === "true";
    setLoggedIn(loggedInStatus);
  }, []);

  const handleLogin = (status) => {
    setLoggedIn(status);
    // Save the login status to localStorage
    localStorage.setItem("isLoggedIn", status);
  };
  {
    /* This is the where we route the websites to each pages */
  }
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<MainLayout showNav={isLoggedIn} />}>
        <Route
          index
          element={isLoggedIn ? <Homepage /> : <Login onLogin={handleLogin} />}
        />
        <Route path='/data' element={<Datapage />} />
        <Route path='/simulation' element={<Simulation />} />
        <Route path='/learning_center' element={<LearningCenter />} />
        <Route path='/News' element={<News />} />
        <Route
          path='/learning_center/guide_info/:category'
          element={<GuideInfoPage />}
        />
        <Route path='*' element={<NotFoundPage />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
};

export default App;
