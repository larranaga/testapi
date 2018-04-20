module.exports = function(app) {
    let personController = require('../controllers/personController');

    app.get('/person/:limit?', personController.listPeople)
        .get('/person/:personId', personController.getPerson)
        .post('/person', personController.createPerson)
        .put('/person', personController.updatePerson);
}