import React from "react";
import "./About.css";
import ME from "../../assets/me-about.jpg";
import { FaAward } from "react-icons/fa";
import { FaUsersLine } from "react-icons/fa6";
import { FaFolderOpen } from "react-icons/fa";



const About = () => {
	return (
		<section id="about">
			<h5>Get To Know</h5>
			<h2>About Me</h2>
    <div className="container about__container">
    <div className="about__me">
			<div className="about__me-image">
				<img src={ME} alt="about image" />
			</div>
      </div>

			<div className=" about__content">
				<div className="about__cards">
					<article className="about__card">
						<FaAward className="about__icon" />
						<h5>Experience</h5>
						<small>3+ Years Working</small>
					</article>
					<article className="about__card">
						<FaUsersLine className="about__icon" />
						<h5>Clients</h5>
						<small>300+ worldwide</small>
					</article>
					<article className="about__card">
						<FaFolderOpen className="about__icon" />
						<h5>Projects</h5>
						<small>30+ completed</small>
					</article>
				</div>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fugit, aliquam natus quisquam aperiam fugiat, ipsam aspernatur totam velit similique dignissimos pariatur optio quam id veritatis non, molestiae commodi eaque illum? Tempore distinctio optio quo nam nemo molestiae sequi recusandae ducimus suscipit iste. Atque animi voluptas quod quam sint eos.</p>

        <a href="#contact" className="btn btn-primary">Let's Talk</a>
			</div>
      </div>
		</section>
	);
};

export default About;
