import React from "react";

const UserCard = (props) => {
    const { id, title, firstName, lastName, picture, gender, email, dateOfBirth, phone, registerDate, location} = props.user;
    return (
        <div className="col-sm-12 col-md-6 mb-4">
            <div className="card testimonial-card">
                <div className="row">
                    <div className="col-4 avatar ml-2 white">
                        <img src={picture} className="rounded-circle img-responsive mt-3" alt="woman avatar" style={{ maxWidth: "75px" }} />

                    </div>
                    <div className="col-6">
                        <h6 className="mt-2 text-strong">{title} {firstName} {lastName}</h6>
                        <hr />
                        <div className="row">
                            <label>Gender:</label>
                            <label>{gender}</label>
                        </div>
                        <div className="row">
                            <label>Date of Birth:</label>
                            <label>{dateOfBirth}</label>
                        </div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="row">
                        <div className="col-6">
                            <div className="row">
                                <label>Phone:</label>
                                <label>{phone}</label>
                            </div>
                            <div className="row">
                                <label>Email:</label>
                                <label>{email}</label>
                            </div>
                        </div>
                        <div className="col-6">
                            <label>Address:</label>
                            <div className="row">
                                <label>Street:</label>
                                <label>{location.street}</label>
                            </div>
                            <div className="row">
                                <label>City:</label>
                                <label>{location.city}</label>
                            </div>
                            <div className="row">
                                <label>State:</label>
                                <label>{location.state}</label>
                            </div>
                            <div className="row">
                                <label>Country:</label>
                                <label>{location.country}</label>
                            </div>
                            <div className="row">
                                <label>TimeZone:</label>
                                <label>{location.timezone}</label>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default UserCard;