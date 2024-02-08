const mongoose = require("mongoose");

const PatientSchema = new mongoose.Schema({
	name: String,
	phone: String,
	address: String,
	symptoms: String,
	status: String
});

module.exports = mongoose.model("covid-patient", PatientSchema);
