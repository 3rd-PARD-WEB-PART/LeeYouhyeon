import {atom} from 'recoil';
import {recoilPersist} from 'recoil-persist';

//recoil을 사용중일 때 세션스토리지에 데이터를 담음
// npm install recoil recoil-persist
const {persistAtom} =recoilPersist({
    key: "infoData", //고유한 키 값
    Storage: sessionStorage, //스토리지 형태: 세션, 로컬 
});

export const myInfo = atom({
    key : 'myInfo',
    default:
    {       
        email: "", 
        password: "", 
        nickname: "", 
        homepage: "", 
        gender: 0, 
        date: "", 
        profileImage: "/프로필 이미지.png", 
        introduce: ""
    },
    effects_UNSTABLE: [persistAtom] //해당 아톰이 변경될 때 마다 설정한 스토리지에 저장됨. 새로고침해도 atom 값 유지
});
