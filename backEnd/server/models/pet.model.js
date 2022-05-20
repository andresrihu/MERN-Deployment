const mongoose = require('mongoose');

const PetSchema = new mongoose.Schema({
    name:{
        type: String,
        required: [true, 'You need to input a Name!'],
        minlength: [3, 'Name must be at least 3 characters long.']
    },
    type:{
        type: String,
        required: [true, 'You need to input a Type!'],
        minlength: [3, 'Type must be at least 3 characters long.']
    },
    description:{
        type: String,
        required: [true, 'You need to input a Description!'],
        minlength: [3, 'Description must be at least 3 characters long.']
    },
    skillOne:{
        type:String
    },
    skillTwo:{
        type:String
    },
    skillThree:{
        type:String
    }
    
}, {timestamps: true});

module.exports.Pet = mongoose.model('Pet', PetSchema);

