import React, {useState} from "react";
import MediaQuery from "react-responsive";
import styled from "styled-components";

function SubIndex(props){
    const {subIndex} =props;
    const [indexDetail, setIndexDetail] =useState(
    subIndex ==="프로필" ? "모두보기" : "회원정보수정"
    );


    const onClickProfileAll = ()=>{
        setIndexDetail("모두보기");
    }

    const onClickㄷEditModify = ()=>{
        setIndexDetail("회원정보수정");
    }

    return(
        <>

        <SubIndexDiv>
            <button style={{color : subIndex === "프로필" ? "#35C5F0" : "#000"}}>프로필</button>
            <button style={{color : subIndex === "나의 쇼핑" ? "#35C5F0" : "#000"}}>나의 쇼핑</button>
            <MediaQuery  minWidth={768} >
                <button style={{color : subIndex === "나의 리뷰" ? "#35C5F0" : "#000"}}>나의 리뷰</button>
            </MediaQuery>
            <button style={{color : subIndex === "설정" ? "#35C5F0" : "#000"}}>설정</button>
        </SubIndexDiv>

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

        </>
    );
}

const SubIndexDiv =styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 64px;
    border-bottom: 1px solid #EAEBEF;
    background: #FFF;
    justify-content: center;
    align-items: center;

    gap: 51px;
    /* mobile */
    @media (max-width:767px){
        gap: 52px;
        height: 54px;
    }

    > button {
        border: none;
        background-color: white;
        color: #000;
        text-align: center;
        font-family: Inter;
        font-size: 18px;
        /* mobile */
        @media (max-width:767px){
            font-size: 16px;
        }
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
    /* mobile */
    @media (max-width:767px){
        gap: 21px;
        height: 53px;
    }

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
        /* mobile */
        @media (max-width:767px){
            font-size: 13px;
        }
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        cursor: pointer;
    }
`

export default SubIndex;