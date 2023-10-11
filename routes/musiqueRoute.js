    const express = require('express');
    const router = express.Router();

    const musiqueController = require('../controllers/musiqueController');
    router
    .route('/')
    .get(musiqueController.listAllmusiques)
    // .get(musiqueController.listAllMusicVote)
    // .post(musiqueController.createAMusique);


    //     router
    //     .route('/:id_musique')
    //     .get(musiqueController.getAMusique)
    //     .delete(musiqueController.deleteAMusique)
    //     .put(musiqueController.updateAMusique);

        module.exports = router;