const express = require('express');
const path = require('path');
const fs = require('fs');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/images', express.static(path.join(__dirname, '../client/images')));

app.use('/', express.static(path.join(__dirname, '../client/build')));

app.post('/api/sendmessage', async (req, res) => {
	try {
		const messages = fs.readFileSync('./messages.txt', 'utf8');
		console.log(messages);
		fs.writeFile('./messages.txt', `${messages}\n${JSON.stringify(req.body)}`, err => console.log(err));
		res.json(req.body);
	} catch (e) {
		console.log(e);
		res.json(e);
	}
});

app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}.`));
