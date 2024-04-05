import React, { useState } from "react";
import styled from "styled-components";
import Header from "../../Layout/Header";
import SubIndex from "../../Layout/SubIndex";
import radio from "../../Assets/activeRadioButton.png"
import profile from "../../Assets/stand.png";


function EditProfile() {
  const [info, setInfo] =useState({
    email : {
      fist : "webpart",
      second: "pard.com"
    },
    nickname : "이유현",
    homepage : "web-pard.com",
    sex: 1,
    birth: "2002.07.01",
    profileimage: profile,
    introduction: "안녕하세요. 다들 과제 화이팅하세요!"
  });

  return (
    <Div>
      <Header/>
      <SubIndex subIndex="설정"/> 
      <InfoEditForm>
        <FistDiv>
          <div>회원정보수정</div>
          <button>탈퇴하기</button>
        </FistDiv>
        <EditDiv>
          <SmallEditDiv>
            <GuideEmail>
              이메일
              <div>* 필수항목</div>
            </GuideEmail>
            <EmailInputDiv>
              <div>
                <EmailInput type="text" value={info.email.fist}></EmailInput>
                @
                <EmailInput type="text" value={info.email.second}></EmailInput>
              </div>
              이메일을 변경하시려면 운영자에게 이메일을 보내주세요.
            </EmailInputDiv>
          </SmallEditDiv>
          <SmallEditDiv style={{marginTop:"40px"}}> 
            <GuideEmail>
              별명
              <div>* 필수항목</div>
            </GuideEmail>
            <EmailInputDiv>
                <NicknameInput type="text" value={info.nickname}></NicknameInput>
            </EmailInputDiv>
          </SmallEditDiv>
          <SmallEditDiv style={{marginTop:"55px"}}> 
            <GuideText style={{marginTop:"11px"}}>
              홈페이지
            </GuideText>
            <EmailInputDiv>
                <NicknameInput type="text" value={info.homepage}></NicknameInput>
            </EmailInputDiv>
          </SmallEditDiv>
          <SmallEditDiv style={{marginTop:"49px", justifyContent: "start"}}> 
            <GuideText style={{marginRight:"72px"}}>
              성별
            </GuideText>
            <SexRadioBtn>
              <label>
                <input type="radio" value={1} checked={info.sex ===1}></input>
                <div>남성</div>
              </label>
              <label>
                <input type="radio" value={2} checked={info.sex ===2}></input>
                <div>여성</div>
              </label>
            </SexRadioBtn>
          </SmallEditDiv>
          <SmallEditDiv style={{marginTop:"49px"}}> 
            <GuideText style={{marginTop:"11px"}}>
              생년월일
            </GuideText>
            <EmailInputDiv>
                <NicknameInput type="text" value={info.birth}></NicknameInput>
            </EmailInputDiv>
          </SmallEditDiv>
          <SmallEditDiv style={{marginTop:"40px",justifyContent:"start"}}> 
            <GuideText style={{marginTop:"11px", width:"100px"}}>
              프로필 이미지
            </GuideText>
            <EditProfileImgDiv>
              <button>
                <img src={info.profileimage} alt="프로필 이미지"></img>
              </button>
              <input type="text" value={info.profileimage}></input>
            </EditProfileImgDiv>
          </SmallEditDiv>
          <SmallEditDiv style={{marginTop:"40px"}}> 
            <GuideText style={{marginTop:"11px"}}>
              한줄 소개
            </GuideText>
            <EmailInputDiv>
              <div>
                <NicknameInput type="text" value={info.introduction}></NicknameInput>
              </div>
            </EmailInputDiv>
          </SmallEditDiv>

        </EditDiv>
        <EditBtnDiv>
          <button>수정하기</button>
        </EditBtnDiv>
      </InfoEditForm>
    </Div>
  );
}

const Div =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const InfoEditForm =styled.form`
  display: flex;
  flex-direction: column;
  width: 1236px;
  height: 956px;
  flex-shrink: 0;

  background: #FFF;
  box-shadow: 0px 1px 3px 0px rgba(0, 0, 0, 0.20);

  margin-top: 61px;
`;

const FistDiv =styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;

  > div {
    color: #292929;
    text-align: center;
    font-family: Inter;
    font-size: 24px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-left: 50px;
  }

  > button {
    margin-right: 50px;
    color: #F05656;
    text-align: center;
    font-family: Inter;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    text-decoration-line: underline;

    background-color: white;
    border: none;
    cursor: pointer;
  }
`;

const EditDiv =styled.div`
  display: flex;
  flex-direction: column;
  width: 500px;
  margin-top: 69px;
  margin-left: 50px;
`;

const SmallEditDiv =styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;

const GuideText =styled.div`
  color: #292929;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const GuideEmail =styled(GuideText)`
  margin-top:10px ;
  > div{
    color: #757575;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  }
`;

const EmailInputDiv =styled.div`
  display: flex;
  flex-direction: column;

  color: #9E9E9E;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  >div{
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    gap: 2.5px;

    color: #DBDBDB;
    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const EmailInput =styled.input`
  display: flex;
  flex-direction: row;

  width: 174px;
  height: 38px;
  flex-shrink: 0;
  padding: 0 7px;

  color: #000;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  border-radius: 6px;
  border: 1px solid #DBDBDB;
  background: #FFF;

`;

const NicknameInput =styled(EmailInput)`
  width: 384px;
`;

const SexRadioBtn =styled.div`
  display: flex;
  flex-direction: row;
  gap:10px;

  > label {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 10px;

    color: #292929;
    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    > input{
      margin: 0;
      width: 22px;
      height: 22px;
      flex-shrink: 0;
    
    }
  }
`;

const EditProfileImgDiv =styled.div`
  display: flex;
  
  >button{
    background-color: white;
    width: 196.118px;
    height: 196px;
    flex-shrink: 0;
    border: 1px solid #DBDBDB;
    padding: 0;
    cursor: pointer;

    >img {
      width: 100%;
      height: 100%;
    }

  }

  > input{
    display: none;
  }

`;


const EditBtnDiv =styled.div`
  display: flex;
  width: 100%;
  justify-content: end;

  >button {
    margin-top: 14px;
    margin-right: 52px;
    padding: 0;

    width: 100px;
    height: 43px;
    flex-shrink: 0;

    border: none;
    border-radius: 5px;
    background: #35C5F0;

    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
  }

`;

export default EditProfile;
