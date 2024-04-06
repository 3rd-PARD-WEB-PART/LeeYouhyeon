import React from "react";
import {Link, useLocation} from 'react-router-dom';

function About(){
    const location =useLocation();
    console.log(location);

    return (
        <div>
            어바웃
            <p>쿼리스트링: {location.pathname}</p>
        </div>
    );

}


export default About;