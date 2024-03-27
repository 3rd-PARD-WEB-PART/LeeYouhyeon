import {useRef, useEffect} from "react";

function Focus(){
    const inputValue =useRef();

    useEffect(()=>{
        console.log(inputValue);
        inputValue.current.focus();
    },[]);

    return(
        <div>
            <input type="text" ref={inputValue} placeholder="username"></input>
            <button>입력</button>
        </div>
    );
}

export default Focus;