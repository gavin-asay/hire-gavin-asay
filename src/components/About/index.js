import React from 'react';
import portrait from '../../assets/images/IMG_0190.jpeg';

function About() {
	return (
		<section id='about'>
			<div>
				<img src={portrait} alt="It's me, Gavin!" />
				<p>Hello! Thank you for visiting.</p>
				<p>
					My name is Gavin Asay. I am a MERN stack web developer, coming from the University of Utah coding boot camp.
				</p>
				<p>
					My interest in web development began in high school, where a class in web design was offered. What started as
					a glorified Dreamweaver class started to teach HTML after I urged the teacher to let the subject matter expand
					beyond a single application. I learned CSS on my own at a time when "Tables are for tabular data!" was a
					slogan among forward-thinking developers.
				</p>
				<p>
					HTML and CSS were skills that opened doors to jobs during and after college. In time, I recognized that many
					more doors would open if I expanded my skillset beyond the foundations and committed myself to becoming a
					full-stack developer. Everyone needs a website, and I am here to provide!
				</p>
			</div>
		</section>
	);
}

export default About;
