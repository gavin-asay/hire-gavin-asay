import React from 'react';

function Portfolio() {
	const projects = [
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
			image: require('../../assets/images/nodevalue_blog.png'),
		},
		{
			title: 'Offline Budget Tracker',
			description: 'Progressive Web App with offline function powered by indexedDB and service worker',
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
			description: 'JavaScript password generator',
			github: 'https://github.com/gavin-asay/secretmaker',
			deploy: 'https://gavin-asay.github.io/secretmaker/',
			image: require('../../assets/images/pwordpreview.png').default,
		},
	];

	return (
		<section>
			<h2>Portfolio</h2>
			{projects.map(proj => (
				<Project project={proj} />
			))}
		</section>
	);
}
