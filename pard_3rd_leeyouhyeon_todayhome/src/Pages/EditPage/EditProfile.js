import React from "react";
import styled from "styled-components";
import Header from "../../Layout/Header";


function EditProfile() {
  return (
    <Div>
      <Header subIndex="설정"/>
      <InfoEditContainer>
      </InfoEditContainer>
    </Div>
  );
}

const Div =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoEditContainer =styled.div`
  display: flex;
  flex-direction: column;
  width: 1236px;
  height: 956px;
  flex-shrink: 0;

  background: #FFF;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.20);

  margin-top: 61px;
`;

export default EditProfile;
