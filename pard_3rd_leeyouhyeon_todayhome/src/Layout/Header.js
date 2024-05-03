import React, {useRef,useState} from "react";
import styled from "styled-components";
import Header_1 from "../Assets/Header_1.png"
import seach_icon from "../Assets/검색 아이콘.png"
import scrap from "../Assets/스크랩 아이콘.png"
import alarm from "../Assets/알림 아이콘.png"
import basket from "../Assets/장바구니 아이콘.png"
import vector from "../Assets/Vector 4.png"
import {Outlet} from 'react-router-dom';
import { useRecoilValue } from "recoil";
import { myInfo } from "../Atom";
import MediaQuery from "react-responsive";
import search_black from "../Assets/search_black.png";
import bar from "../Assets/bar.png";

function Header(){
    const myinfo =useRecoilValue(myInfo);

    const [focusBtn, setFocusBtn] =useState(false);

    const handleInputFocus = () =>{
        setFocusBtn(true);
    }

    const handleInputBlur = ()=>{
        setFocusBtn(false)
    }

    return(
    <div>
        <Container>
        <MediaQuery minWidth={768}>
        <Header1>
            <HeaderMain>
                <img src={Header_1} alt="오늘의 집 아이콘"></img>
            </HeaderMain>
            <CategoryDiv>
                <HeaderOption>커뮤니티</HeaderOption>
                <HeaderOption>쇼핑</HeaderOption>
                <HeaderOption>인테리어/생활</HeaderOption>
            </CategoryDiv>
            {/* labtop */}
            <MediaQuery minWidth={1024}>
                <SearchDiv focusBtn={focusBtn}>
                    <img src={seach_icon} alt="검색 아이콘"></img>
                    <input type="text" placeholder="통합검색" onFocus={handleInputFocus} onBlur={handleInputBlur}></input>
                </SearchDiv>
            </MediaQuery>
            {/* tablet */}
            <MediaQuery minWidth={768} maxWidth={1023}>
                    <img src={search_black} alt="검색 아이콘"
                    style={{marginRight:"21px", cursor:"pointer"}}></img>
            </MediaQuery>
            <SmallIconDiv>
                <button style={{marginRight: "21px"}}>
                    <img src={scrap} alt="스크랩 아이콘" ></img>
                </button>
                <button style={{marginRight: "18px"}}>
                    <img src={alarm} alt="알림 아이콘" ></img>
                </button>
                <button>
                    <img src={basket} alt="장바구니 아이콘"></img>
                </button>
    
            </SmallIconDiv>
            <ProfileImgDiv> 
                <img src={myinfo.profileImage} alt="프로필 이미지"></img>
            </ProfileImgDiv> 
            <WrightingBtn>
                <div>글쓰기</div>
                <MediaQuery minWidth={1024}>
                    <img src={vector}></img>
                </MediaQuery>
            </WrightingBtn>
        </Header1>
        </MediaQuery>
        {/* mobile */}
        <MediaQuery maxWidth={767}>
            <MobileDiv>
                <img src={bar} alt="더보기 아이콘" style={{marginLeft:"17px"}}></img>
                <HeaderMain style={{marginRight:"0px", width:"78px", height:"38px"}}>
                    <img src={Header_1} alt="오늘의 집 아이콘"></img>
                </HeaderMain>
                <MobileIconDiv style={{marginRight:"16px"}}>
                    <img src={search_black} alt="검색 아이콘"
                    style={{marginRight:"21px", cursor:"pointer"}}></img>
                    <img src={basket} alt="장바구니 아이콘"/>
                </MobileIconDiv>
            </MobileDiv>
        </MediaQuery>
        </Container>
            <Outlet/>
    </div>
    );
}

const Container =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
`;  

const Header1 =styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 86px;
    border-bottom: 1px solid #EAEBEF;
    background: #FFF;
    justify-content: center;
    align-items: center;
    background-color: white;

`;

const HeaderMain =styled.button`
    display: flex;
    border: none;
    background-color: white;
    width: 85px;
    height: 41.488px;
    flex-shrink: 0;
    margin-right: 50px;
    //tablet 반응형
    @media (max-width : 1023px){
        margin-right: 37px;
    }
    justify-content: center;
    align-items: center;
    cursor: pointer;

    > img {
        display: flex;
    }
    
`;

const CategoryDiv =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 30px;
    
    margin-right: 118px;
`;

const HeaderOption =styled.button`
    color: #000;
    text-align: center;
    font-family: Inter;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    
    border: none;
    background-color: white;
    cursor: pointer;
`

const SearchDiv =styled.label`
    display: flex;
    flex-direction: row;
    width: 358px;
    /* //labtop 반응형 
    @media (max-width : 1024px ){
        width: 190px;
    } */
    height: 41px;
    flex-shrink: 0;
    justify-content: center;
    align-items: center;
    background-color: white;
    padding: 0;

    border-radius: 3px;
    border: ${(props) =>(props.focusBtn ? "1px solid skyblue" : "1px solid #DADDE0" )};
    margin-right: 29px;;

    > img {
        display: flex;
        width: 19.835px;
        height: 20.5px;
        flex-shrink: 0;
    }

    > input {
        display: flex;

        text-align: start;
        font-family: Inter;
        font-size: 16px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        width: 290px;
        /* //labtop 반응형 
        @media (max-width : 1024px ){
            width: 122px;
        } */
        padding-left: 10px;
        border: none;
        outline: none;

        &::placeholder{ //인풋의 플레이스홀더의 폰트 css에 접근
            color: #DBDBDB;
        }

    }
`;

const SmallIconDiv =styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    margin-right: 23px;

    >button{
        display: flex;
        background-color: white;
        border: none;
        padding: 0;
        cursor: pointer;
    }

`;

const ProfileImgDiv =styled.div`
    display: flex;
    /* border: none; */
    width: 43px;
    height: 43px;
    flex-shrink: 0;
    margin-right: 40px;

    > img {
        display: flex;
        width: 43px;
        height: 43px;
        border: none;
        padding: 0;
        border-radius: 50%;
        /* background-image: url(${props => props.profileImage});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 43px; */
        cursor: pointer;
    }
    

`

const WrightingBtn =styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    height: 43px;
    flex-shrink: 0;
    border-radius: 5px;
    background: #35C5F0;
    border: none;

    color: #FFF;
    text-align: center;
    font-family: Inter;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    gap: 8px;
    cursor: pointer;

    @media (max-width: 1023px){
        width: 69px;
    }
`;

const MobileDiv =styled.div`
    display: flex;
    flex-direction: row;
    width: 100vw;
    height: 60px;
    flex-shrink: 0;
    align-items: center;
    justify-content: space-between;
    border: 1px solid #EAEBEF;

`; 

const MobileIconDiv =styled.div`
    display: flex;
    width: 61px;
    justify-content: space-between;
`;
export default Header;