import React from "react";
import Sidebar from "./componants/Sidebar";
import { BrowserRouter, redirect, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import User from "./pages/User";
import Reservation from "./pages/Reservation";
import Form from "./pages/Form";
import Login from "./componants/Login";

const App = () => {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <>
      <div className="box-border w-100 h-100">
        <div className="flex justify-start items-start">
          <BrowserRouter>
            <Sidebar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route
                path="/dashboard"
                render={() => (isAuthenticated ? <Dashboard /> : redirect("/login"))}
            />
              <Route path="/reservation" element={<Reservation />} />
              <Route path="/user" element={<User />} />
              <Route path="/form" element={<Form />} />
            </Routes>
          </BrowserRouter>
        </div>
      </div>
    </>
  );
};

export default App;
