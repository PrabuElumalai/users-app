import React from "react";

const UserCard = (props) => {
    const { id, title, firstName, lastName, picture } = props.user;
    return (
        <div className="col-sm-12 col-md-4 mb-4">
            <div className="card testimonial-card" style={{ maxWidth: "22rem" }}>
                <div className="card-up aqua-gradient"></div>
                <div className="avatar mx-auto white">
                    <img src={picture} className="rounded-circle img-responsive mt-3" alt="woman avatar" style={{maxWidth:"75px"}}/>
                </div>
                <div className="card-body">
                    <h4 className="card-title">{firstName} {lastName}</h4>
                    <hr />
                    <p><i className="fas fa-quote-left"></i> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos,
                        adipisci</p>
                </div>
            </div>
        </div>
    );

};

export default UserCard;