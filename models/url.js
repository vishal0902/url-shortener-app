const mongoose = require('mongoose')

//Schema 
const urlSchema = new mongoose.Schema({
    shortId :{
        type: String,
        required: true,
        unique: true
    },
    redirectURL: {
        type: String,
        required: true,     
        unique: true   
    },
    visitHistory: [{
        ip:String,
        timestamp:String
    }]

},{timestamps:true});

const Url = mongoose.model('url', urlSchema)


module.exports = {Url}
