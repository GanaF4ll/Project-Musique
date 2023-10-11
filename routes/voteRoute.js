const express = require('express');
const router = express.Router();

const voteController = require('../controllers/voteController');
// requêté par votes
router
.route('/musiques/:id_musique/votes')
    .get(voteController.listAllvotes)
    .post(voteController.createAvote);


//requêté par id de votes
// /:id_vote = req.params.id_vote
// router
//  .route('/votes/:id_vote')
//  .get(voteController.getAvote)
//  .delete(voteController.deleteAvote)
//  .put(voteController.updateAvote);

module.exports = router;