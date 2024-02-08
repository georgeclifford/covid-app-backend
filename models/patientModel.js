const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true
	},
	phone: String,
	address: String,
	symptoms: String,
	status: String
});

module.exports = mongoose.model("covid-patient", PatientSchema);
