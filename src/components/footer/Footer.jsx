import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";



const Footer = () => {
	return (
		<footer>
			<a href="#" className="footer__logo">Doremon</a>

			<ul className="permalinks">
				<li>
					<a href="#"></a>Home
				</li>
				<li>
					<a href="#About"></a>About
				</li>
				<li>
					<a href="#Experiences"></a>Experiences
				</li>
				<li>
					<a href="#Services"></a>Services
				</li>
				<li>
					<a href="#Portfolio"></a>Portfolio
				</li>
				<li>
					<a href="#Testimonials"></a>Testimonials
				</li>
				<li>
					<a href="#Contact"></a>Contact
				</li>
			</ul>

			<div className="foooter__socials">
				<a href="https://facebook.com"><FaFacebook /></a>
				<a href="https://instagram.com"><FaInstagramSquare /></a>
				<a href="https://twitter.com"><FaTwitter /></a>
			</div>

      <div className="footer__copyright">
      <small>&copy; EGATOR Tutorials. All rights reserved.</small>
      </div>
		</footer>
	);
};

export default Footer;
