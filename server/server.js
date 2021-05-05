const express = require('express');
const path = require('path');

const PORT = process.env.PORT || 3001;
const app = express();
const db = require('./config/connection');
const Message = require('./models/Message');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, '../client/images')));

if (process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '../client/build')));
}

app.post('/api/sendmessage', async (req, res) => {
	try {
		const newMessage = await Message.create(req.body);
		res.json(newMessage);
	} catch (e) {
		console.log(e);
		res.json(e);
	}
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

db.once('open', () => {
	app.listen(PORT, () => {
		console.log(`API server running on port ${PORT}.`);
	});
});
