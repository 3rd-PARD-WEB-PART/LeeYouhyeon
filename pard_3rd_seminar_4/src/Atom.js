import react from 'react-router-dom';
import styled from "styled-components";
import {atom, selector} from "recoil";


export const myInfoAge =atom({
    key: 'myInfoAge',
    default: 230,
});

export const myInfoName =atom({
    key: 'myInfoName',
    default: '이유현',
});

export const myInfoSelector =selector({
    key: "myInfoSelector",
    get: ({get})=>{
        const age =get(myInfoAge);
        const name =get(myInfoName);
        return {age, name};
    },
    set: ({set}, newValue) =>{
        if(newValue.age >100){
            set(myInfoAge, newValue.age/10);
        }
        else{
            set(myInfoAge, newValue.age);
        }
        
        set(myInfoName, newValue.name);
    },
});