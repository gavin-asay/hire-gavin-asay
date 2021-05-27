import React from 'react';

function Resume() {
	return (
		<section>
			<h2>Resume</h2>
			<div className='skills'>
				<h3>Technical Skills</h3>
				<p>
					<strong>Languages:</strong> JavaScript, HTML, CSS, SQL, NoSQL
				</p>
				<p>
					<strong>Applications:</strong> Git/GitHub, MongoDB, MySQL
				</p>
				<p>
					<strong>Tools:</strong> Express, Node, React, Redux, Handlebars, Bootstrap, Materialize.css, jQuery,
					Sequelize, Mongoose, GraphQL, styled-components
				</p>
			</div>
			<div className='download'>
				<div className='dload-links'>
					<a
						href={require('../../assets/docs/Resume_GavinAsay_dev.docx').default}
						download='Resume_GavinAsay_dev.docx'
						type='application/vnd.openxmlformats-officedocument.wordprocessingml.document'
						className='text-link'
					>
						Download as .docx
					</a>
					<a
						href={require('../../assets/docs/Resume_GavinAsay_dev.pdf').default}
						download='Resume_GavinAsay_dev.pdf'
						type='application/pdf'
						className='text-link'
					>
						Download as PDF
					</a>
				</div>
				<img src={require('../../assets/images/resume.png').default} className='res-img' alt='resume' />
			</div>
		</section>
	);
}

export default Resume;
