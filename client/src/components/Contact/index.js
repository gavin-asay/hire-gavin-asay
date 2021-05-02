import React, { useState, useRef } from 'react';

function Contact() {
	const [formData, setFormData] = useState({ name: '', email: '', phone: '', organization: '', message: '' });
	const [errorMessage, setErrorMessage] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);
	const [success, setSuccess] = useState(false);
	const submitEl = useRef(null);

	function checkValidity() {
		if (formData.name && formData.email && formData.message) setIsFormValid(true);
		else setIsFormValid(false);
	}

	function handleChange(e) {
		if (success) setSuccess(false);

		if ((e.target.name === 'name' || e.target.name === 'email' || e.target.name === 'message') && !e.target.value) {
			setErrorMessage(`Please enter a valid ${e.target.name}.`);
			checkValidity();
			return;
		} else {
			setErrorMessage('');
			checkValidity();

			if (!errorMessage) setFormData({ ...formData, [e.target.name]: e.target.value });
		}
	}

	async function formSubmit(e) {
		e.preventDefault();
		if (!isFormValid) return;
		console.log(formData);

		submitEl.current.disabled = true;

		const response = await fetch('/api/sendmessage', {
			method: 'POST',
			body: JSON.stringify(formData),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			setSuccess(true);
		} else setErrorMessage(`Error code ${response.status}`);
		submitEl.current.disabled = false;
	}

	return (
		<section>
			<h2>Contact Me</h2>
			<div className='links'>
				<address>
					<ul>
						<li>Orem, UT</li>
						<li>Phone: 951-348-8892</li>
						<li>
							Email:{' '}
							<a href='mailto:gavin.asay@gmail.com' className='text-link'>
								gavin.asay@gmail.com
							</a>
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
			<form id='contact' onBlur={handleChange} onSubmit={formSubmit}>
				<div>
					<label htmlFor='name'>Name: (Required)</label>
					<input type='text' name='name' id='name' defaultValue={formData.name} minLength='2' />
					<label htmlFor='email'>Email Address: (Required)</label>
					<input type='email' name='email' id='email' defaultValue={formData.email} />
					<label htmlFor='phone'>Phone Number:</label>
					<input type='tel' name='phone' id='phone' defaultValue={formData.phone} />
					<label htmlFor='organization'>Organization:</label>
					<input type='text' name='organization' id='organization' defaultValue={formData.organization} />
				</div>
				<div>
					<label htmlFor='message'>Message: (Required)</label>
					<textarea name='message' id='message' defaultValue={formData.message} minLength='1'></textarea>
					<input type='submit' id='submit' value='Submit' ref={submitEl} />
					<p className='form-error'>{errorMessage}</p>
					<p className='success'>{success && 'Message sent successfully!'}</p>
				</div>
			</form>
		</section>
	);
}

export default Contact;
