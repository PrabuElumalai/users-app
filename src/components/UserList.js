import React, { useEffect, useState } from "react";
// import { Link } from "react-router-dom";
import UserCard from "./UserCard";

const UserList = (props) => {
   // console.log(props.users);
    const renderUserList = props.users.map((user) => {
        return (
            <UserCard user={user} key={user.id} />
        );
    });


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