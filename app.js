    const express = require('express')
    const nodemon = require('nodemon')
    const app = express()
    const port = 3000


    const mongoose = require("mongoose");
    mongoose.connect('mongodb://127.0.0.1:27017/apinode');

    app.use(express.urlencoded());
    app.use(express.json());


    const musiqueRoute = require('./routes/musiqueRoute');
    // const voteRoute = require('./routes/voteRoute');

    app.use('/musiques', musiqueRoute);
    // app.use('/', voteRoute);



    app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })

