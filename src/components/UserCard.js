import React from "react";

const UserCard = (props) => {
    const { id, title, firstName, lastName, picture } = props.user;
    return (
        <div className="col-sm-12 col-md-6 mb-4">
            <div className="card testimonial-card">
                <div className="row">
                <div className="col-4 avatar ml-2 white">
                    <img src={picture} className="rounded-circle img-responsive mt-3" alt="woman avatar" style={{maxWidth:"75px"}}/>

                </div>
                <div className="col-6">
                    <h6 className="mt-2 text-strong">{title} {firstName} {lastName}</h6>
                </div>
                </div>
                <div className="card-body">                    
                   <button>View Details</button>
                </div>
            </div>
        </div>
        // <div className="bg-white rounded shadow p-4 overflow-hidden flex md:flex-row flex-col">
        //     <div className="flex-grow"><div className="truncate"><b>ID:</b> 60d0fe4f5311236168a109ca</div>
        //     <img src="https://randomuser.me/api/portraits/women/58.jpg"/></div>
        //     <div className="flex-grow"><div className="font-semibold text-lg truncate">ms. Sara Andersen</div>
        //     <div className="truncate"><b>Gender:</b> female</div><div className="truncate"><b>Date of birth:</b> Apr 30 1996</div>
        //     <div className="truncate"><b>Register date:</b> Jun 21 2021</div>
        //     <br/><div className ="truncate"><b>Email: </b> sara.andersen @example.com</div>
        //     <div className ="truncate"><b>Phone: </b> 92694011</div></div><div className="flex-grow"><b>Address</b><div className="truncate">
        //         <b>State:</b> Nordjylland</div><div className="truncate"><b>Street:</b> 9614, SÃ¸ndermarksvej</div><div className="truncate">
        //             <b>City:</b> Kongsvinger</div><div className="truncate"><b>Country:</b> Denmark</div><div className="truncate"><b>Timezone:</b> -9:00</div></div></div>
    );

};

export default UserCard;