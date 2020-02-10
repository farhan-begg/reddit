const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PostSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    summary: {
        type: String,
        required: true
    },
    subreddit: {
        type: String,
        required: false
    },
    comments: [{
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }]
});

module.exports = mongoose.model("Post", PostSchema)