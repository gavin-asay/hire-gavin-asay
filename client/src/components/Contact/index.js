import React, { useState, useEffect, useRef } from 'react';

function Contact() {
	const [formData, setFormData] = useState({ name: '', email: '', phone: '', organization: '', message: '' });
	const [errorMessage, setErrorMessage] = useState('');
	const [isFormValid, setIsFormValid] = useState(false);
	const [success, setSuccess] = useState(false);

	const submitEl = useRef(null);

	function handleChange(e) {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	}

	function handleError(e) {
		if (success) setSuccess(false);

		if ((e.target.name === 'name' || e.target.name === 'email' || e.target.name === 'message') && !e.target.value) {
			setErrorMessage(`Please enter a valid ${e.target.name}.`);
			return;
		} else {
			setErrorMessage('');
		}
	}

	async function formSubmit(e) {
		e.preventDefault();
		if (!isFormValid) return;

		submitEl.current.disabled = true;
		submitEl.current.value = 'Sending...';

		const response = await fetch('/api/sendmessage', {
			method: 'POST',
			body: JSON.stringify(formData),
			headers: { 'Content-Type': 'application/json' },
		});

		if (response.ok) {
			setSuccess(true);
			setFormData({ name: '', email: '', phone: '', organization: '', message: '' });
		} else setErrorMessage(`Error code ${response.status}`);
		submitEl.current.disabled = false;
	}

	useEffect(() => {
		console.log(formData);
		if (formData.name && formData.email && formData.message) {
			setIsFormValid(true);
		} else setIsFormValid(false);
	}, [formData]);

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
			<form id='contact' onSubmit={formSubmit}>
				<div>
					<label htmlFor='name'>Name: (Required)</label>
					<input
						type='text'
						name='name'
						id='name'
						value={formData.name}
						minLength='2'
						onBlur={handleError}
						onChange={handleChange}
					/>
					<label htmlFor='email'>Email Address: (Required)</label>
					<input
						type='email'
						name='email'
						id='email'
						value={formData.email}
						onBlur={handleError}
						onChange={handleChange}
					/>
					<label htmlFor='phone'>Phone Number:</label>
					<input
						type='tel'
						name='phone'
						id='phone'
						value={formData.phone}
						onBlur={handleError}
						onChange={handleChange}
					/>
					<label htmlFor='organization'>Organization:</label>
					<input
						type='text'
						name='organization'
						id='organization'
						value={formData.organization}
						onBlur={handleError}
						onChange={handleChange}
					/>
				</div>
				<div>
					<label htmlFor='message'>Message: (Required)</label>
					<textarea
						name='message'
						id='message'
						value={formData.message}
						minLength='1'
						onBlur={handleError}
						onChange={handleChange}
					></textarea>
					<input
						type='submit'
						id='submit'
						value={isFormValid ? 'Submit' : 'Please fill out the form'}
						ref={submitEl}
						className={isFormValid ? 'ready' : undefined}
					/>
					<p className='form-error'>{errorMessage}</p>
					<p className='success'>{success && 'Message sent successfully!'}</p>
				</div>
			</form>
		</section>
	);
}

export default Contact;
