import React from "react";
import {Outlet} from "react-router-dom";

function Layout(){

    return (
        <div>
            <header style={{backgroundColor:"skyblue", fontSize: "30px"}} >
            헤더 입니당
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );

}


export default Layout;