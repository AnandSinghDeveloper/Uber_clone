const express = require('express');
const router = express.Router();
const authmiddleware = require('../middlewares/auth.middleware');
const mapController = require('../controllers/maps.controller');
const { query } = require('express-validator');

router.get('/get-coordinate',
  query('address').isString().isLength({min: 3}),
  authmiddleware.authUser,mapController.getCoordinate)




module.exports = router ;
