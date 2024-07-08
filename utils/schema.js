const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const likeSchema = new Schema({
    likedNumb: {
        type: Number,
        required: true
    },
});


module.exports = mongoose.model('Like', likeSchema);
