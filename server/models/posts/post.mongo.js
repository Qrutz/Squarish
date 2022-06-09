const mongoose = require('mongoose');



const PostSchema = new mongoose.Schema({
    
    content: {
        type: String,
        required: true
    },
    createdBy: {
        
        type: "String",
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    likes: {
        type: Number,
        default: 0
    },
    comments: {
        type: Number,
        default: 0
    },
    Shares: {
        type: Number,
        default: 0
    },
    Saved: {
        type: Number,
        default: 0
    },
});


module.exports = mongoose.model('Post', PostSchema);
    