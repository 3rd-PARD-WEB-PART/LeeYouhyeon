import React from "react";
import styled from "styled-components";
import Header from "../../Layout/Header";
import image from "../../Assets/stand.png"
import scrap from "../../Assets/스크랩 아이콘(big).png"
import like from "../../Assets/하트 아이콘.png"
import coupon from "../../Assets/쿠폰 아이콘.png"
import like_red from "../../Assets/하트 아이콘(red).png"
import { useState } from "react";
import SubIndex from "../../Layout/SubIndex";
import {useNavigate} from "react-router-dom";
import { useRecoilValue} from 'recoil';
import { myInfo } from "../../Atom";
import MediaQuery from "react-responsive";

function Profile() {
  const myinfo = useRecoilValue(myInfo);
  console.log(myinfo);

  const [isClicked, setIsClicked] =useState(false);
  const navigate  =useNavigate();

  const onClickLikeIcon = ()=> {
    setIsClicked((isClicked) =>(!isClicked));
  }

  const onClickEdit = () =>{
    navigate("../edit");
  }

  return (
    <Div>
      <SubIndex subIndex="프로필"/>
        <SeeAllContainer> {/* 모두보기 */}
          {/* labtop */}
          <MediaQuery minWidth={1024}>
          <ProfileDiv> 
            <ProfileImg>
              <img src={myinfo.profileImage} alt="프로필 이미지"></img>
            </ProfileImg>
            <NameDiv>{myinfo.nickname}</NameDiv>
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
            <EditBtn onClick={onClickEdit}>설정</EditBtn>
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
        </MediaQuery>
        {/* tablet */}
        <MediaQuery minWidth={768} maxWidth={1023}>
          <TabletDiv>
            <TopDiv>
              <ProfileImg>
                <img src={myinfo.profileImage} alt="프로필 이미지"></img> 
              </ProfileImg>
              <ProfileInfoDiv>
                <NameDiv style={{marginTop:"0px"}}>{myinfo.nickname}</NameDiv>
                <FollowCountsDiv style={{marginTop:"14px"}}>
                  <div>
                    <FollowText>팔로워</FollowText>
                    <FollowCount>0</FollowCount>
                  </div>
                  <div>
                    <FollowText>팔로잉</FollowText>
                    <FollowCount>0</FollowCount>
                  </div>
                </FollowCountsDiv>
                <EditBtn onClick={onClickEdit} style={{marginTop:"9px"}}>설정</EditBtn>
              </ProfileInfoDiv>
            </TopDiv>
            <BottonDiv>
              <ProfileIconState>
                <ScrapIconDiv style={{marginRight:"265px"}}>
                  <img src={scrap} alt="스크랩 아이콘"></img>
                  <SmallText>스크랩북</SmallText>
                  <Couunt>0</Couunt>
                </ScrapIconDiv>
                <LikeIconDiv style={{marginRight:"269px"}}>
                  <button onClick={onClickLikeIcon}>
                    <img src={isClicked ? like_red :like} alt="하트 아이콘"></img>
                  </button>
                  <SmallText>좋아요</SmallText>
                  <Couunt>{isClicked? 1 : 0}</Couunt>
                </LikeIconDiv>
                <CouponIconDiv>
                  <img src={coupon} alt="쿠폰 아이콘"></img>
                  <SmallText>내 쿠폰</SmallText>
                  <Couunt>0</Couunt>
                </CouponIconDiv>
              </ProfileIconState>
            </BottonDiv>
          </TabletDiv>
        </MediaQuery>

        {/* mobile */}
        <MediaQuery maxWidth={767}>
          <MobileProfileDiv>
            <MobileUpDiv>
              <ProfileImg>
                <img src={myinfo.profileImage} alt="프로필 이미지"></img>
              </ProfileImg>
              <ProfileInfoDiv>
                  <NameDiv style={{marginTop:"34px", fontSize:"20px"}}>{myinfo.nickname}</NameDiv>
                  <FollowCountsDiv style={{marginTop:"5px"}}>
                    <div>
                      <FollowText>팔로워</FollowText>
                      <FollowCount>0</FollowCount>
                    </div>
                    <div>
                      <FollowText>팔로잉</FollowText>
                      <FollowCount>0</FollowCount>
                    </div>
                  </FollowCountsDiv>
                  <EditBtn onClick={onClickEdit} style={{marginTop:"9px"}}>설정</EditBtn>
                </ProfileInfoDiv>
            </MobileUpDiv>
            <MobileDownDiv>
              <ProfileIconState>
                <ScrapIconDiv style={{marginRight:"213px"}}>
                  <img src={scrap} alt="스크랩 아이콘"></img>
                  <SmallText>스크랩북</SmallText>
                  <Couunt>0</Couunt>
                </ScrapIconDiv>
                <LikeIconDiv style={{marginRight:"219px"}}>
                  <button onClick={onClickLikeIcon}>
                    <img src={isClicked ? like_red :like} alt="하트 아이콘"></img>
                  </button>
                  <SmallText>좋아요</SmallText>
                  <Couunt>{isClicked? 1 : 0}</Couunt>
                </LikeIconDiv>
                <CouponIconDiv>
                  <img src={coupon} alt="쿠폰 아이콘"></img>
                  <SmallText>내 쿠폰</SmallText>
                  <Couunt>0</Couunt>
                </CouponIconDiv>
              </ProfileIconState>
            </MobileDownDiv>
          </MobileProfileDiv>
        </MediaQuery>
        

        <SeeAllLeftSide>
          <BoldTextDiv>
            <BoldText>사진</BoldText>
            <BoldTextCount>0</BoldTextCount>
          </BoldTextDiv>
          <DashedDiv>
          + 첫 번째 사진을 올려보세요.
          </DashedDiv>
          <BoldTextDiv style={{marginTop: "61.77px"}}>
            <BoldText>집들이</BoldText>
            <BoldTextCount>0</BoldTextCount>
          </BoldTextDiv>
          <DashedDiv>
          + 첫 번째 집들이를 올려보세요.
          </DashedDiv>

        </SeeAllLeftSide>
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
  //tablet 반응형
  @media (max-width : 1023px){
    flex-direction: column;
    align-items: center;
  }
  width: 1230px;
  height: 783px;
    //tablet 반응형
  @media (max-width : 1023px){
    height: 941px;
  }
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
  //tablet 반응형
  @media (max-width : 1023px){
    margin-top: 0px;
  }
  //mobile
  @media (max-width:767px){
    margin-top: 33px;
    height: 88.344px;
    justify-content: end;
  }
  

  > img {
    width: 130px;
    height: 129.504px;
    border-radius: 50%;
      //mobile
    @media (max-width:767px){
      width: 88.344px;
      height: 88.344px;
  }
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
  cursor: pointer;
  
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

  //tablet 반응형
  @media (max-width : 1023px){
    border: none;
    margin-top: 0;
    width: 100%;
  }
  //mobile
  @media (max-width:767px){
    /* height: 54px; */
    margin-top: 51px;
  }
`;

const ScrapIconDiv =styled.div`
  display: flex;
  flex-direction: column;
  width: 48px;
  align-items: center;
  justify-content: center;
  height: 100%;
  margin-top: 28.39px;
  //tablet 반응형
  @media (max-width : 1023px){
    margin-top: 0;
  }
  //mobile
  @media (max-width:767px){
    width: 56px;
    justify-content: start;
  }
`;

const SmallText =styled.div`
  color: #000;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
    //mobile
  @media (max-width:767px){
    font-size: 15px;
  }
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
    //mobile
  @media (max-width:767px){
    width: 42px;
  }

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
    //tablet 반응형
  @media (max-width : 1023px){
    margin-top: 0;
  }
    //mobile
  @media (max-width:767px){
    width: 46px;
  }

`;

const SeeAllLeftSide =styled.div`
  display: flex;
  flex-direction: column;
  width: 750px;
  margin-left: 153px;
  //labtop 반응형 
  @media (max-width : 1024px ){
    margin-left: 137px;
  }
  //tablet
  @media (max-width : 1023px){
    margin: 0;
  }
  
`;

const BoldTextDiv =styled.div`
  display: flex;
  flex-direction: row;
  gap: 4px;
  align-items: center;
  margin-top: 50.8px;
  /* mobile */
  @media (max-width:767px){
      margin-top:72px ;
  }

`;

const BoldText =styled.div`
  color: #000;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const BoldTextCount =styled.div`
  color: #35C5F0;
  font-family: Inter;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const DashedDiv =styled.div`
  display: flex;
  width: 750px;
  height: 187.282px;
  flex-shrink: 0;
  border: 1px dashed #757575;
  justify-content: center;
  align-items: center;

  color: #757575;
  text-align: center;
  font-family: Inter;
  font-size: 13px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;

  margin-top: 20.92px;
`;

const TabletDiv =styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 1003px;
  height: 310px;
  border: 1px solid #EAEBEF;
  margin-top: 32px;
`;

const TopDiv =styled.div`
  display: flex ;
  width: 948px;
  height: 174px;
  border-bottom: 1px solid #EAEBEF;
  align-items: center;
`;
const BottonDiv =styled.div`
  display: flex ;
`;

const ProfileInfoDiv =styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 130px;
  margin-left: 20px;
`;

const MobileProfileDiv =styled.div`
  display: flex;
  width: 813px;
  height: 270px;
  flex-direction: column;
  border-bottom: 1px solid #EAEBEF;
`;

const MobileUpDiv =styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  width: 100%;
`;

const MobileDownDiv =styled.div`
  display: flex;
  /* margin-top: 51px; */
`;

export default Profile;
