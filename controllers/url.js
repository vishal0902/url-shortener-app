const shortId = require('shortid')
const { Url } = require('../models/url')


async function handleGetUrls(req, res) {
    const result = await Url.find()

    res.status(201).json({msg:"success",data: result})
}

async function generateShortId(req, res) {
    const { url } = req.body;
    const  shortID = shortId.generate()
    const result = await Url.create({
        shortId: shortID,
        redirectURL: url
    })
    res.status(201).json({ msg: "success", id: result._id })

}


async function handleRedirect(req, res) {
    const shortId = req.params.shortId;

    const doc = await Url.findOneAndUpdate(
        { shortId }, {
        $push: {
            visitHistory: {
                ip: req.ip,
                time: Date.now()
            }
        }
    })
    console.log(doc)
    res.redirect(doc.redirectURL)
}


async function handleShowAnalytics(req,res) {
    const {shortId} = req.params.shortId
    const doc = await Url.findOne(shortId)
    

    const clickCount = doc.visitHistory.length;
    console.log(doc)
    res.status(201).json({msg:"success", clickCount: clickCount})

}



module.exports = { handleGetUrls, generateShortId, handleRedirect, handleShowAnalytics }




  // await Url.findByIdAndUpdate(result[0]._id,{
    //     $push : {visitHistory : {
    //         ip:req.ip,
    //         time: Date.now() 
    //     }}
    // })
    // result = await Url.find({
    //     shortId:url
    // })

    
    // res.json({msg: "success",id: result[0]._id, numberOfClicks: result[0].visitHistory.length})
