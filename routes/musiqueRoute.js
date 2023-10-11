    const express = require('express');
    const router = express.Router();

    const musiqueController = require('../controllers/musiqueController');
    router
    .route('/')
    .get(musiqueController.listAllmusiques)
    .post(musiqueController.createAmusique);


        router
        .route('/:id_musique')
        .get(musiqueController.getAmusique)
        .delete(musiqueController.deleteAmusique)
        .put(musiqueController.updateAmusique);

        module.exports = router;