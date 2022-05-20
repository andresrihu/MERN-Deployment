const {Pet} = require('../models/pet.model');

module.exports.index = (req, res) => {
    res.json({
        message: "hello world!"
    });
}

// Create a Pet
module.exports.createPet = (req, res) =>{
    const {name, type, description, skillOne, skillTwo, skillThree} = req.body;
    Pet.create({
        name,
        type,
        description,
        skillOne,
        skillTwo,
        skillThree
    })
        .then(result=> res.json(result))
        .catch(err => res.status(400).json({message:"Something went wrong creating new", error: err}))
}

// Find all Pets
module.exports.findAllPets = (req,res) => {
    Pet.find()
        .then(results=>res.json({results}))
        .catch(err => res.json({message:"Something went wrong finding all", error: err}));
}

// Find one Pet
module.exports.findOnePet = (req, res) => {
    Pet.findOne({_id: req.params._id})
        .then(results => res.json({results}))
        .catch(err=> res.json({message:"Something went wrong finding one", error: err}));
}

// Update Pet
module.exports.updatePet = (req, res) => {
    Pet.updateOne({_id: req.params._id}, req.body,{new: true, runValidators: true})
        .then(results=>res.json({results}))
        .catch(err=>res.status(400).json({message:"Something went wrong updating", error:err}));
}

// Delete Pet
module.exports.deletePet = (req, res) =>{
    Pet.deleteOne({_id: req.params._id})
        .then(results=>res.json({results}))
        .catch(err=>res.json({message:"Something went wrong updating", error:err}));
}