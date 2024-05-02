import {atom} from 'recoil';

export const myInfo = atom({
    key : 'myInfo',
    default:  {
        email: "", 
        password: "", 
        nickname: "", 
        homepage: "", 
        gender: 0, 
        date: "", 
        profileImage: "", 
        introduce: ""
    }
});