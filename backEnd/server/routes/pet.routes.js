const PetController = require('../controllers/pet.controller');

module.exports = app => {
    app.get('/api', PetController.index);
    app.get('/api/pets/all', PetController.findAllPets);
    app.get('/api/pets/:_id', PetController.findOnePet);
    app.post('/api/pets/new', PetController.createPet);
    app.patch('/api/pets/update/:_id', PetController.updatePet);
    app.delete('/api/pets/delete/:_id', PetController.deletePet);
}