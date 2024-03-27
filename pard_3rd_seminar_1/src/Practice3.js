import React, { useState } from "react";

function Practice3(){
    const [inputValue, setInputValue] =useState("");
    const handleInputChange = (e) =>{
        setInputValue(e.target.value);
    }
    const handleButtonClick =()=>{
        alert(inputValue);
    }

    return(
        <div>
            <input type="text" onChange={handleInputChange} value={inputValue}></input>
            <button onClick={handleButtonClick}>Display</button>
        </div>
    );
}

export default Practice3;