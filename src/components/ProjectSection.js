import React from "react";
import { FaArrowRight } from 'react-icons/fa';
import image1 from "../assets/react-space.jpg";
import image2 from "../assets/infinite-scroll.jpg";
import image3 from "../assets/photo-gallery.jpg";
import image4 from "../assets/event-planner.jpg";

const ProjectSection = () => {
    return (
        <section id="projects">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
                {/* Project1 */}
                <div className="project-card">
                    <img src={image1} className="image1-class" />
                    <h3>React Space</h3>
                    <p>
                        Handy tool belt to create amazing AR components in a React app,
                        with redux integration via middleware
                    </p>

                    <a href="#" target="_blank" rel="noopener noreferrer">
                        See more <FaArrowRight/>
                    </a>
                </div>

                {/* Project2 */}
                <div className="project-card">
                    <img src={image2} className="image1-class" />
                    <h3>React Infinite Scroll</h3>
                    <p>
                        A Scrollable bottom sheet with visualization suport, native
                        animations of 60FPS and fully implemented in JS tand.
                    </p>

                    <a href="#" target="_blank" rel="noopener noreferrer">
                        See more <FaArrowRight/>
                    </a>
                </div>

                {/* Project3 */}
                <div className="project-card">
                    <img src={image3} className="image1-class" />
                    <h3>Photo Gallery</h3>
                    <p>
                        A one-stop shop for photographers to share and monetize their
                        photos, allowing them to have a second source of income.
                    </p>

                    <a href="#" target="_blank" rel="noopener noreferrer">
                        See more <FaArrowRight/>
                    </a>
                </div>

                {/* Project4 */}
                <div className="project-card">
                    <img src={image4} className="image1-class" />
                    <h3>Event Planner</h3>
                    <p>
                        A mobile application for leisure seekers to discover unique events and activities in their city with a few taps.
                    </p>

                    <a href="#" target="_blank" rel="noopener noreferrer">
                        See more <FaArrowRight/>
                    </a>
                </div>
            </div>
        </section>
    );
};

export default ProjectSection;
