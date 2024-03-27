import React , {useState, useEffect}from "react";

function Practice2(){
    const [count, setCount] =useState(0);

    useEffect(()=>{
        console.log("리액트는 재밌어!");
    }, [count]);

    return(
        <div>
            <p>You clicked {count} times</p>
            <button onClick={()=>setCount(count+1)}>click me</button>
        </div>
    );
}

export default Practice2;
