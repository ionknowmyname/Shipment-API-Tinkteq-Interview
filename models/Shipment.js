const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const shipmentSchema = new Schema(
    {
        weight: { 
            type: Number,
            required: true,
        },
        distance: { 
            type: Number, 
            required: true,
        },
        cargoType: { 
            type: String,
            required: true,
        }, 
        calculatedCost: { 
            type: Number, 
            required: true,
        },
    },
    { timestamps: true }
);

const Shipment = mongoose.model("Shipment", shipmentSchema);
module.exports = Shipment;