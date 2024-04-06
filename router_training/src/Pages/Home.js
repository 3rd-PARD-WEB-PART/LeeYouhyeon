import React from "react";
import {Link} from "react-router-dom";

function Home(){

    return (
        <div>
            홈페이지
            <Link to = "/about">
                <button>어바웃 ㄱㄱ</button>
            </Link>

            <ul>
                <li>
                    <Link to= "/profiles/pmj">박민지의 프로필</Link>
                </li>
                <li>
                    <Link to= "/profiles/kki">김광일의 프로필</Link>
                </li>
                <li>
                    <Link to= "/profiles/void">존재하지 않는 프로필</Link>
                </li>
            </ul>
        </div>
    );

}


export default Home;