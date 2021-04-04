import React from 'react';

function Contact() {
	return (
		<section>
			<form id='contact'>
				<label htmlFor='name'>Name: (Required)</label>
				<input type='text' name='name' id='name' />
				<label htmlFor='email'>Email Address: (Required)</label>
				<input type='email' name='email' id='email' />
				<label htmlFor='phone'>Phone Number:</label>
				<input type='tel' name='phone' id='phone' />
				<label htmlFor='organization'>Organization:</label>
				<input type='text' name='organization' id='organization' />
				<label htmlFor='message'>Message:</label>
				<textarea name='message' id='message'></textarea>
				<input type='submit' id='submit' value='Submit' />
			</form>
		</section>
	);
}

export default Contact;
