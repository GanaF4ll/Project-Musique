    const mongoose = require('mongoose');
    const Schema = mongoose.Schema;

    let voteSchema = new Schema ({
    note: {
        type: Number,
        required: "REQUIRED",
        min : 1,
        max : 5,
        validate: {
        validator: Number.isInteger,
        message: 'Le champ doit être un nombre entier.'
    }
    },
    dateDeSoumission: {
        type: Date,
        default: Date.now
    },
    musique_id: {
        type: String,
        required: true
    }

    });

    module.exports = mongoose.model('vote', voteSchema);