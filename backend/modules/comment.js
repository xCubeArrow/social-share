const mongoose = require("mongoose");

const schema = mongoose.Schema({
    _id: {
        type: mongoose.Types.ObjectId
    },
    postId: {type: mongoose.Types.ObjectId, ref: "post"},
    userId: {type: mongoose.Types.ObjectId, ref: "user"},
    content: String,

    likesUser: {type: [mongoose.Types.ObjectId], ref: "user"},
    likesCount: {type: Number, default: 0}
});

module.exports = mongoose.model("comment", schema);