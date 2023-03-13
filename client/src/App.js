import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GlobalStyle from "./GlobalStyle";
import RequireAuth from "./components/RequireAuth";
import Header from "./components/Header";
import Login from "./pages/Login";
import VehicleNavigation from "./components/VehicleNavigation";
import VehicleList from "./pages/VehicleList";
import VehicleAdd from "./pages/VehicleAdd";
import Settings from "./pages/Settings";
import DispatchNavigation from "./components/DispatchNavigation";
import DispatchAdd from "./pages/DispatchAdd";
import DispatchList from "./pages/DispatchList";

function App() {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Login />} />
          <Route element={<RequireAuth />}>
            <Route path="/vehicle" element={<VehicleNavigation />}>
              <Route index element={<VehicleList />} />
              <Route path="list" element={<VehicleList />} />
              <Route path="add" element={<VehicleAdd />} />
            </Route>
            <Route path="/dispatch" element={<DispatchNavigation />}>
              <Route index element={<DispatchAdd />} />
              <Route path="add" element={<DispatchAdd />} />
              <Route path="list" element={<DispatchList />} />
            </Route>
            <Route path="/settings" element={<Settings />} />
          </Route>
        </Routes>
      </Router>
      <ToastContainer theme="dark" />
    </>
  );
}

export default App;
