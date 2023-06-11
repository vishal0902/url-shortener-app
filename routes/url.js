const express = require('express')
const router = express.Router()
const {handleGetUrls,generateShortId, handleRedirect, handleShowAnalytics} = require('../controllers/url')


router.get('/',handleGetUrls)

router.post('/',generateShortId)

router.get('/:shortId',handleRedirect)

router.get('/analytics/:shortId',handleShowAnalytics)


module.exports = {router}