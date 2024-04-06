import React from "react";
import {Link, useParams} from "react-router-dom";

function Article(){
    const id =useParams();

    return (
        <div>
            <h1>게시글 번호 : {id.id} </h1>
        </div>
    );

}


export default Article;