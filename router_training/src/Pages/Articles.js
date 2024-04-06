import React from "react";
import {Link, NavLink, Outlet} from "react-router-dom";

function Articles(){

    return (
        <div>
            <div>
                <Outlet/>
            </div>
            <ul>
                <ArticleItem id={1}/>
                <ArticleItem id={2}/>
                <ArticleItem id={3}/>
            </ul>

        </div>
    );

}

const ArticleItem = ({id}) =>{

    const activeStyle = {
        color: "green",
        fontSize: 21
    }
    const DefaultStyle = {
        color: "orange",
        fontSize: 15,
    }

    return(
        <li>
        <NavLink to={`/articles/${id}`}
        style={({isActive}) =>(isActive? activeStyle :DefaultStyle)}>
            게시글 {id}
        </NavLink>
        </li>
    );
};


export default Articles;