const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pricingSchema = new Schema(
    {
        cargoType: { 
            type: String,
            required: true,
            unique: true,
        }, 
        baseDistanceRate: { 
            type: Number, 
            required: true,
        },
        ratePerKg: { 
            type: Number, 
            required: true,
        },
    },
    { timestamps: true }
);

const Pricing = mongoose.model("Pricing", pricingSchema);
module.exports = Pricing;