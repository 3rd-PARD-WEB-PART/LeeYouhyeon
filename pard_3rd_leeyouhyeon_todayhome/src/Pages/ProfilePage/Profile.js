import React from "react";
import styled from "styled-components";
import Header from "../../Header";
import image from "../../Assets/stand.png"
import scrap from "../../Assets/스크랩 아이콘(big).png"
import like from "../../Assets/하트 아이콘.png"
import coupon from "../../Assets/쿠폰 아이콘.png"
import like_red from "../../Assets/하트 아이콘(red).png"
import { useState } from "react";

function Profile() {
  const [isClicked, setIsClicked] =useState(false);

  const onClickLikeIcon = ()=> {
    setIsClicked((isClicked) =>(!isClicked));
  }

  return (
    <Div>
      <Header subIndex="프로필"/>
      <SeeAllContainer>
        <ProfileDiv>
          <ProfileImg>
            <img src={image}></img>
          </ProfileImg>
          <NameDiv>이유현</NameDiv>
          <FollowCountsDiv>
            <div>
              <FollowText>팔로워</FollowText>
              <FollowCount>0</FollowCount>
            </div>
            <div>
              <FollowText>팔로잉</FollowText>
              <FollowCount>0</FollowCount>
            </div>
          </FollowCountsDiv>
          <EditBtn>설정</EditBtn>
          <ProfileIconState>
            <ScrapIconDiv style={{marginRight:"34px"}}>
              <img src={scrap} alt="스크랩 아이콘"></img>
              <SmallText>스크랩북</SmallText>
              <Couunt>0</Couunt>
            </ScrapIconDiv>
            <LikeIconDiv  style={{marginRight:"40px"}}>
              <button onClick={onClickLikeIcon}>
                <img src={isClicked ? like_red :like} alt="하트 아이콘"></img>
              </button>
              <SmallText style={{marginTop:"12.95px"}}>좋아요</SmallText>
              <Couunt>{isClicked? 1 : 0}</Couunt>
            </LikeIconDiv>
            <CouponIconDiv>
              <img src={coupon} alt="쿠폰 아이콘"></img>
              <SmallText style={{marginTop:"12.95px"}}>내 쿠폰</SmallText>
              <Couunt>0</Couunt>
            </CouponIconDiv>
          </ProfileIconState>

        </ProfileDiv>

      </SeeAllContainer>
    </Div>
  );
}

const Div =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SeeAllContainer =styled.div`
  display: flex;
  flex-direction: row;
  width: 1230px;
  height: 783px;
  flex-shrink: 0;
  background: #FFF;

`;

const ProfileDiv =styled.div`
  display: flex;
  flex-direction: column;
  width: 285px;
  height: 460.237px;
  flex-shrink: 0;
  align-items: center;

  border-radius: 3px;
  border: 1px solid #DBDBDB;
  margin-top: 31.88px;
  margin-left: 6px;

`;

const ProfileImg =styled.div`
  display: flex;
  width: 130px;
  height: 129.504px;
  flex-shrink: 0;
  margin-top: 31.88px;

  > img {
    width: 130px;
    height: 129.504px;
    border-radius: 50%;
  }
  
`;

const NameDiv =styled.div`
  display: flex;
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 24.9px;

`;

const FollowCountsDiv =styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 12.95px;
  width: 121px;
  justify-content: space-between;

  > div {
    display: flex;
    flex-direction: row;
  }
`;

const FollowText =styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  padding-right: 5px;
`;

const FollowCount =styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const EditBtn =styled.button`
  display: flex;
  width: 60px;
  height: 34.866px;
  flex-shrink: 0;
  border-radius: 5px;
  border: 1px solid #DBDBDB;
  padding: 0;
  justify-content: center;
  align-items: center;
  background-color: white;
  
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  margin-top: 15.94px;
`;

const ProfileIconState =styled.div`
  display: flex;
  flex-direction: row;
  height: 125.55px;
  width: 231px;
  border-top: 1px solid #EAEBEF;
  justify-content: center; 
  align-items: center;

  margin-top: 29.38px;
`;

const ScrapIconDiv =styled.div`
  display: flex;
  flex-direction: column;
  width: 48px;
  align-items: center;
  height: 100%;
  margin-top: 28.39px;
`;

const SmallText =styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  height: 15.939px;

  margin-top: 11.95px;
`;

const Couunt =styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 15px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 5.98px;
`;

const LikeIconDiv =styled(ScrapIconDiv)`
  width: 36px;

  > button{
    border: 0;
    background-color: white;
    padding: 0;
    width: 30px;
    height: 25.905px;
    cursor: pointer;
  }
`

const CouponIconDiv =styled(ScrapIconDiv)`
  width: 40px;
  margin-top: 31.38px;

`;

export default Profile;
