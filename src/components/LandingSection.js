import React from "react";
import profileImage from "../assets/avatar.jpg";

const LandingSection = () => {
    return (
        <section id="landing" className="section">
            <div className="section-content">
                <div className="landing-container">
                    <div className="img-name">
                        <div className="avatar">
                            <img src={profileImage} alt="Avatar" className="profile-image" />
                        </div>

                        <h3>Hello, I am Smit Solanki!</h3>
                    </div>
                    <div>
                        <p>
                            A frontend developer<br></br>specialised in React.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default LandingSection;
