import React from "react";
import {Link, useParams} from 'react-router-dom';

const data = {
    pmj : {
        name: "박민지",
        description: "파트장"
    } ,
    kki : {
        name: "김광일",
        description: "부파트장"
    }
}

function Profile(){
    const params = useParams();

    const profile =data[params.username]

    return (
        <div>
            <h1>사용자 프로필</h1>
            {
                profile? 
                (
                    <div>
                        {profile.name}
                        {profile.description}
                    </div>
                ) :
                (
                   <p> 존재하지 않음 </p>
                )
            }
        </div>
    );

}


export default Profile;