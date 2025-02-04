const express = require("express");
const router = express.Router();

const shipment = require("../controllers/shipmentController");



router.post("/", shipment.create);




module.exports = router;