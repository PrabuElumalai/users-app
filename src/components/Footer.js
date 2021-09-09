import React from "react";

const Footer = () => {
    return (
        // <!-- Footer -->
        <footer className="page-footer font-small indigo darken-4 py-4 mt-4">

            {/* <!-- Footer Elements --> */}
            <div className="container">

                <div className="row">
                    <div className="col-md-6 d-flex justify-content-start">
                        {/* <!-- Copyright --> */}
                        <div className="footer-copyright text-center bg-transparent">No © Copyright issues
                        </div>
                        {/* <!-- Copyright --> */}
                    </div>
                    <div className="col-md-6 d-flex justify-content-end">
                        <div className="footer-copyright text-right bg-transparent">Made with <i className="fas fa-heart red-text mx-1"></i>
                        </div></div>
                </div>

            </div>
            {/* <!-- Footer Elements --> */}

        </footer>
        // <!-- Footer -->
    )
}

export default Footer;