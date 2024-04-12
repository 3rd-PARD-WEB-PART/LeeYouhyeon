import React, {useState, useEffect} from "react";
import styled from "styled-components";
import Logo from "../../Assets/Logo.png"
import {useNavigate} from 'react-router-dom';

function RegisterPage() {
  const navigate =useNavigate();
  const [userdata, setUserdata] =useState({
    email: " ",
    password: " ",
    passwordCheck: " ",
    nickname: " ",
  });
  const [isSubmitokay, setIsSubmitokay] =useState(true);



  const handleEmail = (e) =>{
      setUserdata({...userdata, email: e.target.value});
  };

  const handlePassword = (e) =>{
    setUserdata({...userdata, password: e.target.value});
  };

  const handlePasswordCheck = (e) =>{
    setUserdata({...userdata, passwordCheck: e.target.value});
  };

  const handleNickname = (e) =>{
    setUserdata({...userdata, nickname: e.target.value});
  };

  useEffect(() => {
    if (
      userdata.email.trim() !== "" &&
      userdata.password.trim() !== "" &&
      userdata.passwordCheck.trim() !== "" &&
      userdata.nickname.trim() !== "" &&
      /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(userdata.password) &&
      userdata.password === userdata.passwordCheck &&
      userdata.nickname.length >= 2 &&
      userdata.nickname.length <= 15
    ) {
      setIsSubmitokay(false); 
    } else {
      setIsSubmitokay(true); 
    }
  }, [userdata]);
  

  const SubmitRegisterData = (e) =>{
    e.preventDefault();

    console.log(userdata, "입력성공");
    navigate("./profile");

  }

  return (
    <BgDiv>
      <Div>
        <Top>
          <LogoImg src={Logo} alt="오늘의집 로고"></LogoImg>
        </Top>
        <ContentFormDiv onSubmit={SubmitRegisterData}>
          <RegisterDiv>회원가입</RegisterDiv>
          <SubDiv style={{marginBottom:"12px"}}>이메일</SubDiv>
          <InputDiv type="email" placeholder="이메일" onChange={handleEmail}></InputDiv>

          <SubDiv style={{marginBottom:"13px"}}>비밀번호</SubDiv>
          <SubDiv style={{marginBottom:"9px"}}>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</SubDiv>
          <InputDiv type="password" placeholder="비밀번호" onChange={handlePassword}></InputDiv>

          <SubDiv style={{marginBottom:"12px"}}>비밀번호 확인</SubDiv>
          <InputDiv type="password" placeholder="비밀번호 확인" onChange={handlePasswordCheck}></InputDiv>

          <SubDiv style={{marginBottom:"15px"}}>닉네임</SubDiv>
          <SubDiv style={{marginBottom:"8px"}}>다른 유저와 겹치지 않도록 입력해주세요. (2~15자)</SubDiv>
          <InputDiv type="text" placeholder="별명 (2~15자)"  onChange={handleNickname} style={{marginBottom:"34px"}}></InputDiv>
          <RegisterBtn disabled={isSubmitokay}>회원가입하기</RegisterBtn>

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
  background-color: #EAEBEF; //배경색
  height: 100vh; //화면창 기준 높이를 가득 채움
  justify-content: center; //flex-direction: row 가 디폴트값(따로 flex-direction를 바꾸지 않으면 row임 ), 가로축 기준 중앙 정렬
  align-items: center; //세로축 기준 중앙 정렬
`;

const Div =styled.div`
  display: flex;
  flex-direction: column; //자식 요소들(Div 안에 감싸진 요소들)을 세로로 정렬함
  width: 635px;
  height: 840px;
  background-color: #FFFFFF;
  align-items: center; //가로축 기준으로 정렬(flex-direction이 row가 아니라 column이 되었음으로 정렬 기준이 바뀜)
`;

const Top =styled.div`
  display: flex;
  width: 100%;
  height: 112px;
  justify-content: start; //가로축 기준 왼쪽 정렬
  align-items: center; //세로축 기준 중앙정렬

`;

const LogoImg =styled.img`
  display: flex;
  width: 89.424px;
  height: 31px;
  margin-left: 14px; // 왼쪽에 여백을 주겠다. margin은 LogoImg의 width에 영향을 안주지만, padding으로 할 경우 width 값이 +14px됨
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
  text-align: center; //글자 중앙 정렬
  font-family: Inter;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 20px; //위에 여백 줌 
  margin-bottom: 56px; //아래에 여백 줌
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
  width: calc(359px - 38px); //38px은 아래에서 추가한 padding값임. padding은 넓이에 영향을 주기 때문에, input의 넓이를 359px로 만들기 위해서 calc를 통해서 전체 넓이에 패딩값을 빼준 것
  height: 40px;
  flex-shrink: 0;
  border-radius: 5px; // 박스의 윤곽선을 5px만큼 둥글게 
  border: 1px solid #DBDBDB; //윤곽선 두깨, 윤곽선 타입(선이나 점 등등), 윤곽선 색
  padding: 0 19px; // 위아래 패딩 0으로 없애고 좌우 19px 줌

  color: #757575;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-bottom: 32px;

  &::placeholder{ //인풋의 플레이스홀더의 폰트 css에 접근
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
  cursor: pointer; //버튼에 마우스를 올렸을 때 커서를 변경 

  margin-bottom: 29px;

`;

const LoginDiv =styled.div`
  display: flex;
  flex-direction: row;
  width: 100%; //부모 요소를 기준으로 넓이 전부 채움
  justify-content: center;

  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  gap: 2px; //자식 요소들 간의 간격을 2px만큼 띄움

  > a{ //LoginDiv로 감싸진 자식 요소 a 태그에 접근
    color: #000;
    &:link, :visited, :hover{ //링크를 클릭하기 전, 후, 호버했을 경우
      color: #000;
      cursor: pointer;
    }
  }
`;

export default RegisterPage;