const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const patient_entry = require("./controllers/patientRouter");

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(
	"mongodb+srv://george:grg@cluster0.4t4uabs.mongodb.net/covidDb?retryWrites=true&w=majority",
	{ useNewUrlParser: true }
);

app.use("/api/covid/", patient_entry);

app.listen(3001, () => {
	console.log("Server is running!");
});
