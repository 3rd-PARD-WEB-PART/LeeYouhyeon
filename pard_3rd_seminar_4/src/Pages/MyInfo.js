import react from 'react-router-dom';
import styled from "styled-components";
import { myInfoAge, myInfoName } from '../Atom';
import React from 'react';
import { useRecoilState, useRecoilValue } from 'recoil';
import {Link} from 'react-router-dom';

function MyInfo(){
    const [myName, setMyName] =useRecoilState(myInfoName); 
    const age =useRecoilValue(myInfoAge);

    return (
        <div>
            <h1>메인 페이지</h1>
            <h2>나이 : {age}</h2>
            <h3>이름 : {myName}</h3>

            <Link to="/update">수정하기</Link>
        </div>
    );
}

export default MyInfo;