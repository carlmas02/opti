import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Analytics from "./components/Analytics";
import Dashboard from "./components/Dashboard";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import ErrorPage from "./components/ErrorPage";
import Inventory from "./components/Inventory";
import SpringDeets from "./components/SpringDeets";
import Download from "./components/Download";
import Delete from "./components/Delete";
import Profile from "./components/Profile";
import NewSpring from "./components/NewSpring";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </BrowserRouter>
      {/* <Navbar />
      <Analytics />
      <Dashboard />
      <Cards />
      <Footer />
      <ErrorPage />
      <Inventory />
      <SpringDeets />
      <Download />
      <Delete />
      <Profile />
      <NewSpring /> */}
    </div>
  );
}

export default App;

// {
//   /* <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<HomePage />} />
//           <Route path="/test" element={<Inventory />} />
//         </Routes>
//       </BrowserRouter>
//       <Navbar /> */
// }
// {
//   /* <Home /> */
// }
// {

// }
