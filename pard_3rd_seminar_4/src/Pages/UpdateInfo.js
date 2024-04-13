import react from 'react-router-dom';
import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil';
import styled from "styled-components";
import { myInfoAge, myInfoName, myInfoSelector } from '../Atom';
import {useNavigate} from 'react-router-dom';

function UpdateInfo(){
    // const [myAge, setMyAge] =useRecoilState(myInfoAge);
    // const [myName, setMyName] =useRecoilState(myInfoName);

    const myInfo =useRecoilValue(myInfoSelector);
    const setMyInfo =useSetRecoilState(myInfoSelector);

    const navigator = useNavigate();

    const submitHandler = () =>{
        if(window.confirm("수정하겠습니까?")){
            alert("수정됨");
        }else{
            alert("취소됨");
        }

        navigator("/");
    }

    return (
        <div>
            <h1>정보 수정 페이지</h1>
            <div>
                <span>나이</span>
                <input type="number" value={myInfo.age}  onChange={(e) => {
                    setMyInfo({...myInfo, age: e.target.value});
                    }}/>
            </div>s
            <div>
                <span>이름</span>
                <input type="text" value={myInfo.name} onChange={(e) => setMyInfo({...myInfo, name: e.target.value})}/>
            </div>
            <button onClick={submitHandler}>수정하기</button>
        </div>
    );
}

export default UpdateInfo;