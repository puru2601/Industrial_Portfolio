import React from "react";
import "./Experience.css";
import { BsPatchCheckFill } from "react-icons/bs";


const Experience = () => {
	return (
		<section id="experiences">
			<h5>What Skills I Have</h5>
			<h2>My Experiences</h2>

			<div className="container experience__container">
				<div className="experience__frontend">
            <h3>Frontend Development</h3>
            <div className="experience__content">
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
             <div>
             <h4>HTML</h4>
             <small className="text-light">Experienced</small>
             </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
              <div>
              <h4>CSS</h4>
              <small className="text-light">Intermidiate</small>
              </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>JavaScript</h4>
            <small className="text-light">Intermidiate</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>Bootstrap</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>Tailwind</h4>
            <small className="text-light">Intermidiate</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>React</h4>
            <small className="text-light">beginner</small>
            </div>
            </article>
            
            </div>
        </div>
				<div className="experience__backtend">
        
            <h3>Backend Development</h3>
            <div className="experience__content">
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>MongoDB</h4>
            <small className="text-light">Intermidiate</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>ExpressJS</h4>
            <small className="text-light">Intermidiate</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>NextJS</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>Python</h4>
            <small className="text-light">Beginner</small>
            </div>
            </article>
            <article className="experience__details">
            <BsPatchCheckFill className="experience__details-icon" />
            <div>
            <h4>mySQL</h4>
            <small className="text-light">Experienced</small>
            </div>
            </article>
           
            
           
        </div>
        </div>
			</div>
		</section>
	);
};

export default Experience;
