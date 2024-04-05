import React, {useRef,useState} from "react";
import styled from "styled-components";
import Header_1 from "./Assets/Header_1.png"
import seach_icon from "./Assets/검색 아이콘.png"
import scrap from "./Assets/스크랩 아이콘.png"
import alarm from "./Assets/알림 아이콘.png"
import basket from "./Assets/장바구니 아이콘.png"
import image from "./Assets/stand.png"
import vector from "./Assets/Vector 4.png"

function Header(props){
    const {subIndex} =props;
    const [focusBtn, setFocusBtn] =useState(false);
    const [indexDetail, setIndexDetail] =useState(
    subIndex ==="프로필" ? "모두보기" : "회원정보수정"
    );

    const handleInputFocus = () =>{
        setFocusBtn(true);
    }

    const handleInputBlur = ()=>{
        setFocusBtn(false)
    }

    const onClickProfileAll = ()=>{
        setIndexDetail("모두보기");
    }

    const onClickㄷEditModify = ()=>{
        setIndexDetail("회원정보수정");
    }

    return(
        <Container>
        <Header1>
            <HeaderMain>
                <img src={Header_1} alt="오늘의 집 아이콘"></img>
            </HeaderMain>
            <CategoryDiv>
                <HeaderOption>커뮤니티</HeaderOption>
                <HeaderOption>쇼핑</HeaderOption>
                <HeaderOption>인테리어/생활</HeaderOption>
            </CategoryDiv>
            <SearchDiv focusBtn={focusBtn} for="search" >
                <img src={seach_icon} alt="검색 아이콘"></img>
                <input type="text" placeholder="통합검색" onFocus={handleInputFocus} onBlur={handleInputBlur} id="search"></input>
            </SearchDiv>
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
                <button>
                    <div></div> 
                </button>
            </ProfileImgDiv> 
            <WrightingBtn>
                <div>글쓰기</div>
                <img src={vector}></img>
            </WrightingBtn>

        </Header1>

        <SubIndex>
            <button style={{color : subIndex === "프로필" ? "#35C5F0" : "#000"}}>프로필</button>
            <button style={{color : subIndex === "나의 쇼핑" ? "#35C5F0" : "#000"}}>나의 쇼핑</button>
            <button style={{color : subIndex === "나의 리뷰" ? "#35C5F0" : "#000"}}>나의 리뷰</button>
            <button style={{color : subIndex === "설정" ? "#35C5F0" : "#000"}}>설정</button>
        </SubIndex>

        <SubIndexDetail>
            { (subIndex === "프로필") ? 

                ( <>
                    <button onClick={onClickProfileAll} style={{color : indexDetail === "모두보기" ? "#35C5F0" : "#000"}}>모두보기</button>
                    <button>사진</button>
                    <button>집들이</button>
                    <button>노하우</button>
                    <button>질문과답변</button>
                    <button>스크랩북</button>
                    <button>좋아요</button>
                </>
                )
                :
                ( <>
                    <button onClick={onClickㄷEditModify} style={{color : indexDetail === "회원정보수정" ? "#35C5F0" : "#000"}}>회원정보수정</button>
                    <button>알림 설정</button>
                    <button>사용자 숨기기 설정</button>
                    <button>전문가 신청</button>
                    <button>비밀번호 변경</button>
                    <button>추천코드</button>
                    </>
                )
                
            }
        </SubIndexDetail>

        </Container>
    );
}

const Container =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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

    > button {
        display: flex;
        width: 43px;
        height: 43px;
        border: none;
        padding: 0;
        border-radius: 50%;
        background-color: #DBDBDB;
        background-image: url(${image});
        background-position: center;
        background-repeat: no-repeat;
        background-size: 43px;
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
`;

const SubIndex =styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 64px;
    border-bottom: 1px solid #EAEBEF;
    background: #FFF;
    justify-content: center;
    align-items: center;

    gap: 51px;

    > button {
        border: none;
        background-color: white;
        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        cursor: pointer;
    }
`;

const SubIndexDetail =styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 65px;
    border-bottom: 1px solid #EAEBEF;
    background: #FFF;
    justify-content: center;
    align-items: center;
    gap: 36px;

    > button{
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        background-color: white;
        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: 15px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        cursor: pointer;
    }
`

export default Header;