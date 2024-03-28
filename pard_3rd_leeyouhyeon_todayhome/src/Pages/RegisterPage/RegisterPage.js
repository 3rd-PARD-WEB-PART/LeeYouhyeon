import React from "react";
import styled from "styled-components";
import Logo from "../../Assets/Logo.png"

function RegisterPage() {
  return (
    <BgDiv>
      <Div>
        <Top>
          <LogoImg src={Logo} alt="오늘의집 로고"></LogoImg>
        </Top>
        <ContentFormDiv>
          <RegisterDiv>회원가입</RegisterDiv>
          <SubDiv style={{marginBottom:"12px"}}>이메일</SubDiv>
          <InputDiv type="text" placeholder="이메일"></InputDiv>

          <SubDiv style={{marginBottom:"13px"}}>비밀번호</SubDiv>
          <SubDiv style={{marginBottom:"9px"}}>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</SubDiv>
          <InputDiv type="password" placeholder="비밀번호"></InputDiv>

          <SubDiv style={{marginBottom:"12px"}}>비밀번호 확인</SubDiv>
          <InputDiv type="password" placeholder="비밀번호 확인"></InputDiv>

          <SubDiv style={{marginBottom:"15px"}}>닉네임</SubDiv>
          <SubDiv style={{marginBottom:"8px"}}>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</SubDiv>
          <InputDiv type="text" placeholder="별명 (2~15자)" style={{marginBottom:"34px"}}></InputDiv>
          <RegisterBtn>회원가입하기</RegisterBtn>

          <LoginDiv>
            <div>이미 아이디가 있으신가요? </div>
            <a href="https://www.notion.so/we-pard/PARD-3-40d40282e3f3431aa70bea7ab740ee21">로그인</a>
          </LoginDiv>

        </ContentFormDiv>
      </Div>
    </BgDiv>
  );
}

const BgDiv =styled.div`
  display: flex;
  background-color: #EAEBEF;
  height: 100vh;
  justify-content: center;
  align-items: center;
`;

const Div =styled.div`
  display: flex;
  flex-direction: column;
  width: 635px;
  height: 840px;
  background-color: #FFFFFF;
  align-items: center;
`;

const Top =styled.div`
  display: flex;
  width: 100%;
  height: 112px;
  justify-content: start;
  align-items: center;

`;

const LogoImg =styled.img`
  display: flex;
  width: 89.424px;
  height: 31px;
  margin-left: 14px;
`;

const ContentFormDiv =styled.form`
  display: flex;
  flex-direction: column;
  width: 360px;
  height: 728px;
`;

const RegisterDiv =styled.div`
  display: flex;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 20px;
  margin-bottom: 56px;
`;

const SubDiv =styled.div`
  display: flex;
  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const InputDiv =styled.input`
  width: calc(359px - 38px);
  height: 40px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #DBDBDB;
  padding: 0 19px;

  color: #757575;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 32px;

  &::placeholder{
    color: #DBDBDB;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const RegisterBtn =styled.button`
  display: flex;
  width: 359px;
  height: 50px;
  flex-shrink: 0;
  border: none;
  border-radius: 3px;
  background: #35C5F0;
  justify-content: center;
  align-items: center;

  color: #FFF;
  text-align: center;
  font-family: Inter;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;

  margin-bottom: 29px;

`;

const LoginDiv =styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: center;

  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  gap: 2px;

  > a{
    color: #000;
    &:link, :visited, :hover{
      color: #000;
      cursor: pointer;
    }
  }
`;

export default RegisterPage;