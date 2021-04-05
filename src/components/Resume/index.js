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
					<strong>Tools:</strong> Express, Node, React, Handlebars, Bootstrap, Materialize.css, jQuery, Sequelize,
					Mongoose
				</p>
			</div>
			<div className='download'>
				<img src={require('../../assets/images/resume.png').default} alt='resume' />
				<div className='dload-links'>
					<a
						href={require('../../assets/docs/Resume_GavinAsay_dev.docx').default}
						download='Resume_GavinAsay_dev.docx'
						type='application/vnd.openxmlformats-officedocument.wordprocessingml.document'
					>
						Download as .docx
					</a>
					<a
						href={require('../../assets/docs/Resume_GavinAsay_dev.pdf').default}
						download='Resume_GavinAsay_dev.pdf'
						type='application/pdf'
					>
						Download as PDF
					</a>
				</div>
			</div>
		</section>
	);
}

export default Resume;