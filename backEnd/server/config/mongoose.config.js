const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost/pet-shelter", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log("We're connected to the DB"))
    .catch(err => console.log("Something is wrong with conenction to DB", err));