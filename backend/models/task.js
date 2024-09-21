
const mongoose  = require('mongoose');

const taskSchema = new mongoose.Schema({
    name : {
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    Completed:{
        type:Boolean,
        required:true,
        default:false,
    },
    createdAt:{
        type:Date,
        default:Date.now
    }

});

module.exports = mongoose.model('Task',taskSchema);
