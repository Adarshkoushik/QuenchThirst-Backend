const mongoose=require('mongoose')

const {Schema, model}=mongoose

const vehicleTypeSchema=new Schema({
  name : String, 
  capacity : String,       
  prices : [
    {   
        purpose : String,
        price : Number
    }
  ]
},{timestamps:true})

const VehicleType = model('VehicleType', vehicleTypeSchema)

module.exports = VehicleType
