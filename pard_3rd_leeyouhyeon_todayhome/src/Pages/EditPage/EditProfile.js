import React, { useState , useRef, useEffect} from "react";
import styled from "styled-components";
import Header from "../../Layout/Header";
import SubIndex from "../../Layout/SubIndex";
import radio from "../../Assets/activeRadioButton.png"
import profile from "../../Assets/stand.png";
import {useNavigate} from "react-router-dom";
import { useRecoilState } from "recoil";
import { myInfo } from "../../Atom";
import { getMemberAPI, patchMemberAPI } from "../../API/AxiosAPI";

function EditProfile() {
  const id =1;
  const [myinfo, setMyinfo] = useRecoilState(myInfo);
  const emailSplit =myinfo.email.split('@');

  const [info, setInfo] =useState({
    email : {
      fist : emailSplit[0],
      second: emailSplit[1]
    },
    nickname : myinfo.nickname,
    homepage : myinfo.homepage,
    gender: myinfo.gender,
    birth: myinfo.date,
    profileimage: myinfo.profileImage,
    introduction: myinfo.introduce
  });

  //서버에서 데이터를 가져옴
  const getMemberData = async(id) =>{
    try{
      const response = await getMemberAPI(id);
      // console.log(response.data);
      const image = response.data.profileImage;

      //리코일에 설정
      setMyinfo((myinfo)=>({
        ...myinfo,
        id: response.data.id,
        email: response.data.email,
        nickname: response.data.nickname,
        homepage : response.data.homepage,
        gender: response.data.gender,
        date: response.data.date,
        password: response.data.password,
        profileImage: (image ===""? "/프로필 이미지.png" : image ),
        introduce: response.data.introduce
      }));

    }
    catch(error){
      console.error(error);
    }
  }

  //수정한 데이터를 서버에 보냄
  const patchMemeberData = async(id, data)=>{
    try{
      const response = await patchMemberAPI(id, data);
    }
    catch(error){
      console.error(error);
    }
  }

  useEffect(()=>{
    getMemberData(id);
    if(info.nickname===""){
      window.location.reload();
    };

    console.log(myinfo);
  }, [])

  const navigate =useNavigate();

  const imageInput =useRef();

  const onClickBtn = () =>{
    imageInput.current.click();
  }

  // 이벤트 핸들러
  const handleEmailfist = (e) =>{
    setInfo({...info,
    email :{
      ...info.email,
      fist: e.target.value
    }})
  }

  const handleEmailSecond = (e) =>{
    setInfo({...info,
      email :{
        ...info.email,
        second: e.target.value
      }})
  }

  const handleNickname = (e) =>{
    setInfo({...info,
    nickname: e.target.value})
  }

  const handleHomepage = (e) =>{
    setInfo({...info,
    homepage:e.target.value})
  }

  const handleGender= (e) =>{
    setInfo({...info,
    gender:e.target.value})
  }

  const handleBirth = (e) =>{
    setInfo({...info,
    birth:e.target.value})
  }

  const handleProfileimg = (e) =>{
    const file = e.target.files[0];
    if (file){
      const imgURL = URL.createObjectURL(file);
      setInfo({
        ...info,
        profileimage: imgURL
      })
    }
  }

  const handleIntro = (e) =>{
    setInfo({...info,
    introduction:e.target.value})
  }

  //수정 버튼을 눌렀을 때 데이터가 atom에 저장됨 
  const submitInfo = async(e) =>{
    e.preventDefault();
    console.log(info);

    const data = {
      email: info.email.fist +"@"+info.email.second,
      nickname: info.nickname,
      homepage : info.homepage,
      gender: info.gender,
      date: info.birth,
      profileImage: info.profileimage,
      introduce: info.introduction
    }

    console.log("클릭 데이터",data);
    await patchMemeberData(id, data);
    getMemberData(id);

    navigate("../profile");
  }

  return (
    <Div>
      <SubIndex subIndex="설정"/>
      <InfoEditForm onSubmit={submitInfo}>
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
            <InputDiv>
              <div>
                <EmailInput type="text" value={info.email.fist} onChange={handleEmailfist}></EmailInput>
                @
                <EmailInput type="text" value={info.email.second} onChange={handleEmailSecond}></EmailInput>
              </div>
              이메일을 변경하시려면 운영자에게 이메일을 보내주세요.
            </InputDiv>
          </SmallEditDiv>
          <SmallEditDiv style={{marginTop:"40px"}}> 
            <GuideEmail>
              별명
              <div>* 필수항목</div>
            </GuideEmail>
            <InputDiv>
                <NicknameInput type="text" value={info.nickname} onChange={handleNickname}></NicknameInput>
            </InputDiv>
          </SmallEditDiv>
          <SmallEditDiv style={{marginTop:"55px"}}> 
            <GuideText style={{marginTop:"11px"}}>
              홈페이지
            </GuideText>
            <InputDiv>
                <NicknameInput type="text" value={info.homepage} onChange={handleHomepage}></NicknameInput>
            </InputDiv>
          </SmallEditDiv>
          <SmallEditDiv style={{marginTop:"49px", justifyContent: "start"}}> 
            <GuideText style={{marginRight:"72px"}}>
              성별
            </GuideText>
            <SexRadioBtn>
              <label>
                <RadioInput type="radio" value={0} checked={info.gender ==0} onChange={handleGender}></RadioInput>
                <div>남성</div>
              </label>
              <label>
                <RadioInput type="radio" value={1} checked={info.gender ==1} onChange={handleGender}></RadioInput>
                <div>여성</div>
              </label>
            </SexRadioBtn>
          </SmallEditDiv>
          <SmallEditDiv style={{marginTop:"49px"}}> 
            <GuideText style={{marginTop:"11px"}}>
              생년월일
            </GuideText>
            <InputDiv>
                <NicknameInput type="text" value={info.birth} onChange={handleBirth}></NicknameInput>
            </InputDiv>
          </SmallEditDiv>
          <SmallEditDiv style={{marginTop:"40px",justifyContent:"start"}}> 
            <GuideText style={{marginTop:"11px", width:"100px"}}>
              프로필 이미지
            </GuideText>
            <EditProfileImgDiv>
              <button type="button" onClick={onClickBtn}>
                <img src={info.profileimage} alt="프로필 이미지"></img>
              </button>
              <input type="file" ref={imageInput} onChange={handleProfileimg}></input>
            </EditProfileImgDiv>
          </SmallEditDiv>
          <SmallEditDiv style={{marginTop:"40px"}}> 
            <GuideText style={{marginTop:"11px"}}>
              한줄 소개
            </GuideText>
            <InputDiv>
              <div>
                <NicknameInput type="text" value={info.introduction} onChange={handleIntro}></NicknameInput>
              </div>
            </InputDiv>
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

const InputDiv =styled.div`
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

  }
`;

const RadioInput =styled.input`
    margin: 0;
    width: 22px;
    height: 22px;
    flex-shrink: 0;
    appearance: none;
    border: 1px solid #DBDBDB; // 체크되지 않았을 때의 테두리 색상
    border-radius: 50%;
    cursor:pointer;

    &:checked {
    border-radius: 50%;
    background-color: white; // 체크 시 내부 원으로 표시될 색상
    border: 6px solid #35C5F0; // 테두리가 아닌, 테두리와 원 사이의 색상
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
