const express = require('express');
const router = express.Router();

const voteController = require('../controllers/voteController');
router
.route('/musiques/:id_musique/votes')
    .get(voteController.listAllVotes)
//     .post(voteController.createAvote);


// router
//  .route('/votes/:id_vote')
//  .get(voteController.getAvote)
//  .delete(voteController.deleteAvote)
//  .put(voteController.updateAvote);

// module.exports = router;