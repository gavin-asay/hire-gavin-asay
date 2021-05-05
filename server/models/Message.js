const mongoose = require('mongoose');

const { Schema } = mongoose;

const MessageSchema = new Schema({
	name: {
		type: String,
		required: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
	},
	phone: {
		type: String,
	},
	organization: {
		type: String,
	},
	message: {
		type: String,
		required: true,
	},
});

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
