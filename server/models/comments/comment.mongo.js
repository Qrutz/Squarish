const mongoose = require('mongoose');


const CommentSchema = new mongoose.Schema({

    content: {
        type: String,
        required: true
    },
    createdBy: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    Post_ID: {
        type: String,
        required: true
        

    }
});

        
            
module.exports = mongoose.model('Comment', CommentSchema);