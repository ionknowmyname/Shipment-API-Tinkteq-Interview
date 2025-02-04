const Shipment = require("../models/Shipment");
const Pricing = require("../models/Pricing");

const create = async (req, res) => {
    
    try {
      const { weight, distance, cargoType } = req.body;

      if (!weight || !distance || !cargoType)
        return res.status(400).json({ message: "All fields are required" });

      const pricing = await Pricing.findOne({ cargoType });
      if (!pricing)
        return res
          .status(404)
          .json({ message: "Pricing data not found for this cargo type" });

      const calculatedCost = weight * pricing.ratePerKg + distance * pricing.baseDistanceRate;

      const newShipment = await Shipment.create({
        weight,
        distance,
        cargoType,
        calculatedCost,
      });

      res
        .status(201)
        .json({ message: "Shipment saved", shipment: newShipment });

    } catch (error) {
      console.error("Error while creating shipment --> " + error.message);
      res.status(500).json({ message: "Error while creating shipment" });
    }
   
};

module.exports = { create };
