const express = require ('express')
const router = express.Router();
const authMiddleware = require('../middleware/auth')


const {logon} = require ('../controllers/mainController')

router.route('/hello').get( authMiddleware )
router.route('/logon').post(logon)

module.exports = router;