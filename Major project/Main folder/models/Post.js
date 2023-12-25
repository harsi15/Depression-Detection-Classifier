const mongoose =require('mongoose');

const PostSchema = mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    email:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required:true
    },
    gender:{
        type: String,
        required:true
    },
    age:{
        type: Int32Array,
        required: true
    }

});

module.exports =mongoose.model('Posts',PostSchema);