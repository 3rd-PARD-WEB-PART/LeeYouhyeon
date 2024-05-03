import {atom} from 'recoil';

// [세션스토리지 참고 자료] : https://lasbe.tistory.com/158
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
    //atom의 Effects는 부수효과를 관리하고 recoil의 atom을 초기화하거나 동기화할 때 사용하는 API
    //setSelf를 통해 atom의 값을 설정 : 세션스토리지 값을 가져와 아톰에 저장
    //onSet을 통해 atom의 변화를 감지해 torage에 데이터를 저장 

    //데이터를 저장할 때는 문자열만 저장가능 
    //JSON.stringify -> json 형태를 문자열로 변환
    //JSON.parse -> 문자열을 json 형태로 변환 
    effects: [
        ({setSelf, onSet}) => {
            const saveSessionData =sessionStorage.getItem("myinfoData");
            if(saveSessionData){
                setSelf(JSON.parse(saveSessionData));
            }

            onSet((newValue, _, isReset) =>{
                isReset
                ? sessionStorage.removeItem("myinfoData")
                : sessionStorage.setItem("myinfoData", JSON.stringify(newValue));
            })
        }
    ]
});
