import React from "react";
import "./Contact.css";
import { MdEmail } from "react-icons/md";
import { IoMailOpen } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";
import { useRef } from 'react';
import emailjs from 'emailjs-com'



const Contact = () => {
	const form = useRef();

	const sendEmail = (e) => {
		e.preventDefault();
	
		emailjs.sendForm('service_knxdj8p', 'template_n790p36', form.current, 'event_d9473b3232720b111e1451c5') 
		e.target.reset()
	};
	return (
		<section id="contact">
			<h5>Get In Touch</h5>
			<h2>Contact Me</h2>

			<div className="container contact__container">
				<div className="contact__options">
					<article className="contact__option">
						<MdEmail className="contact__option-icon"/>
						<h4>Email</h4>
						<h5>jhachhotu54@gmail.com</h5>
						<a href="mailto:jhachhotu54@gmail.com" target="_blank">Send a message</a>
					</article>
					<article className="contact__option">
						<IoMailOpen className="contact__option-icon"/>
						<h4>Messanger</h4>
						<h5>egatortutorials</h5>
						<a href="https://m.me/ernest.achiever" target="_blank">Send a message</a>
					</article>
					<article className="contact__option">
						<IoLogoWhatsapp className="contact__option-icon" />
						<h4>Whatsapp</h4>
						<h5>+1472583690</h5>
						<a href="https://api.whatsapp.com/send?phone=9162440158" target="_blank">Send a message</a>
					</article>
				</div>

        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required/>
        <input type="email" name="email" placeholder="Your Full Email" required/>
        <textarea name="message" rows="7" placeholder="Your Message"></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
			</div>
		</section>
	);
};

export default Contact;
