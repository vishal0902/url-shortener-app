const mongoose =  require('mongoose')

async function connectToDb (url) {
    mongoose.connect(url)
}

module.exports = {
    connectToDb
}