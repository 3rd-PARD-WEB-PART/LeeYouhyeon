import React from "react";
import RegisterPage from "./Pages/RegisterPage/RegisterPage";
import styled from "styled-components";
import Profile from "./Pages/ProfilePage/Profile";
import EditProfile from "./Pages/EditPage/EditProfile";

function App() {
  return (
    <div className="App">
      {/* <RegisterPage/> */}
      
      <Profile/>
      {/* <EditProfile/> */}
    </div>
  );
}

export default App;
