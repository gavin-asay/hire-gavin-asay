import React from 'react';

function Project({ project }) {
	const { title, description, github, deploy, image } = project;

	return (
		<div className='proj-card'>
			<img src={image} alt={title} />
			<h3>{title}</h3>
			<p>{description}</p>
			<div className='card-links'>
				<a href={github} target='_blank' rel='noreferrer'>
					GitHub Repo
				</a>
				{
					deploy && (
						<a href={deploy} target='_blank' rel='noreferrer'>
							Deployed Site
						</a>
					) /* not all projects have a deploy */
				}
			</div>
		</div>
	);
}

export default Project;
