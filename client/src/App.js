import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Login from "./pages/Login";
import Vehicle from "./pages/Vehicle";
import Dispatch from "./pages/Dispatch";
import Settings from "./pages/Settings";
import VehicleList from "./pages/Vehicle/VehicleList";
import VehicleAdd from "./pages/Vehicle/vehicleAdd";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/vehicle/*" element={<Vehicle />}>
              <Route index element={<VehicleList />} />
              <Route path="list" element={<VehicleList />} />
              <Route path="add" element={<VehicleAdd />} />
            </Route>
            <Route path="/dispatch" element={<Dispatch />} />
            <Route path="/settings" element={<Settings />} />
          </Routes>
        </div>
      </Router>
      <ToastContainer />
    </>
  );
}

export default App;
