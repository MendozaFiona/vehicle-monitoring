import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./GlobalStyle";
import RequireAuth from "./components/RequireAuth";
import Header from "./components/Header";
import Login from "./pages/Login";
import Vehicle from "./components/VehicleNavigation";
import Dispatch from "./pages/Dispatch";
import Settings from "./pages/Settings";
import VehicleList from "./pages/VehicleList";
import VehicleAdd from "./pages/VehicleAdd";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <div className="container">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route
              path="/vehicle/*"
              element={
                <RequireAuth>
                  <Vehicle />
                </RequireAuth>
              }
            >
              <Route index element={<VehicleList />} />
              <Route path="list" element={<VehicleList />} />
              <Route path="add" element={<VehicleAdd />} />
            </Route>
            <Route
              path="/dispatch"
              element={
                <RequireAuth>
                  <Dispatch />
                </RequireAuth>
              }
            />
            <Route
              path="/settings"
              element={
                <RequireAuth>
                  <Settings />
                </RequireAuth>
              }
            />
          </Routes>
        </div>
      </Router>
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
