import React from 'react';
import portrait from '../../assets/images/IMG_0190.jpeg';

function About() {
	return (
		<section id='about'>
			<div>
				<img src={portrait} alt="It's me, Gavin!" />
				<p>Hello! Thank you for visiting.</p>
				<p>My name is Gavin Asay. I am a full stack web developer.</p>
				<p>
					My experience includes full stack development with JavaScript, jQuery and React.js on the front end. On the
					backend, I have experience with node.js using Express and Sequelize, as well as Python using Flask and
					SQLAlchemy. Finally, I have a growing proficiency in .NET MVC applications.
				</p>
				<p>Please feel free to view projects featured in my portfolio or download my resume.</p>
			</div>
		</section>
	);
}

export default About;
