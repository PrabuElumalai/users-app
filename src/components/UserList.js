import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import UserCard from "./UserCard";

const UserList = (props) => {
    console.log(props.users);
    const renderUserList = props.users.map((user) => {
        return (
            <UserCard user={user} key={user.id} />
        );
    });

    // const renderUserList = () => {
    //     return (
    //         <div>
    //             {props.users.length > 0 ? (

    //                 // <Pagination
    //                 //     data={props.users}
    //                 //     UserCard={UserCard}
    //                 //     title="Posts"
    //                 //     pageLimit={5}
    //                 //     dataLimit={10}
    //                 // />
    //                 <h1>User Data</h1>

    //             ) : (
    //                 <h1>No Posts to display</h1>
    //             )}
    //         </div>
    //     );

    // }
    //  const pagination = 

    return (
        <section style={{ marginTop: "5rem", marginBottom: "2rem" }}>
            <div className="container">
                <div className="row">
                    {renderUserList}
                </div>
            </div>
        </section>
    )
}

export default UserList;