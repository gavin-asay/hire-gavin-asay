import React from 'react';

function Contact() {
	return (
		<section>
			<h2>Contact Me</h2>
			<div className='links'>
				<address>
					<ul>
						<li>Phone: 951-348-8892</li>
						<li>
							Email: <a href='mailto:gavin.asay@gmail.com'>gavin.asay@gmail.com</a>
						</li>
						<a href='https://github.com/gavin-asay' target='_blank' rel='noreferrer'>
							<img
								src={require('../../assets/images/logos/GitHub-Mark-120px-plus.png').default}
								className='logo'
								alt='GitHub'
							/>
						</a>
						<a href='https://www.linkedin.com/in/gavinasay/' target='_blank' rel='noreferrer'>
							<img src={require('../../assets/images/logos/LI-Bug.svg').default} className='logo' alt='LinkedIn' />
						</a>
					</ul>
				</address>
			</div>
			<form id='contact'>
				<div>
					<label htmlFor='name'>Name: (Required)</label>
					<input type='text' name='name' id='name' />
					<label htmlFor='email'>Email Address: (Required)</label>
					<input type='email' name='email' id='email' />
					<label htmlFor='phone'>Phone Number:</label>
					<input type='tel' name='phone' id='phone' />
					<label htmlFor='organization'>Organization:</label>
					<input type='text' name='organization' id='organization' />
				</div>
				<div>
					<label htmlFor='message'>Message:</label>
					<textarea name='message' id='message'></textarea>
					<input type='submit' id='submit' value='Submit' />
				</div>
			</form>
		</section>
	);
}

export default Contact;
