import React from 'react';
import Project from '../Project';

function Portfolio() {
	const projects = [
		{
			title: 'Rounds',
			description: 'React/Redux app for easy, mobile-friendly data tracking',
			github: 'https://github.com/gavin-asay/rounds',
			deploy: 'https://gavin-asay.github.io/rounds/',
			image: require('../../assets/images/rounds.png').default,
		},
		{
			title: 'Cravings',
			description: 'Front-end food finder using AJAX and Materialize.css',
			github: 'https://github.com/gavin-asay/Project-1',
			deploy: 'https://github.com/daniwhitlock/Cravings',
			image: require('../../assets/images/cravings.png').default,
		},
		{
			title: 'Landmark Tracker',
			description: 'Full-stack app featuring Google Maps API and handlebars.js',
			github: 'https://github.com/gavin-asay/landmark-tracker',
			deploy: 'https://infinite-basin-15382.herokuapp.com/',
			image: require('../../assets/images/landmark_tracker.png').default,
		},
		{
			title: 'nodeValue Tech Blog',
			description: 'Full-stack blogging app with APIs for blog posts, users, and comments',
			github: 'https://github.com/gavin-asay/nodevalue-tech-blog',
			deploy: 'https://fast-journey-11216.herokuapp.com/',
			image: require('../../assets/images/nodevalue_blog.png').default,
		},
		{
			title: 'Offline Budget Tracker',
			description: 'Progressive Web App with offline function powered by indexedDB',
			github: 'https://github.com/gavin-asay/offline-budget-tracker',
			deploy: 'https://damp-reaches-81626.herokuapp.com/',
			image: require('../../assets/images/budget_tracker.png').default,
		},
		{
			title: 'refactored-disco',
			description: 'Back-end for social media API using express.js and MongoDB',
			github: 'https://github.com/gavin-asay/refactored-disco',
			deploy: null,
			image: require('../../assets/images/refactored_disco.png').default,
		},
		{
			title: 'secretmaker',
			description: 'Simple native JavaScript password generator',
			github: 'https://github.com/gavin-asay/secretmaker',
			deploy: 'https://gavin-asay.github.io/secretmaker/',
			image: require('../../assets/images/pwordpreview.png').default,
		},
	];

	return (
		<section className='portfolio'>
			<h2>Portfolio</h2>
			{projects.map(proj => (
				<Project project={proj} key={proj.title} />
			))}
		</section>
	);
}

export default Portfolio;
