import React from "react";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import styled from "styled-components";
import Profile from "./Pages/ProfilePage/Profile";
import EditProfile from "./Pages/EditPage/EditProfile";
import {Route, Routes} from "react-router-dom"
import Header from "./Layout/Header";

function App() {
  return (
    <Routes>
      <Route path="/" element={<RegisterPage/>}></Route>
      <Route element={<Header/>} >
        <Route path="/profile" element={<Profile/>}></Route>
        <Route path="/edit" element={<EditProfile/>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
