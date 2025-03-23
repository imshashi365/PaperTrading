const {model}=require("mongoose");
const {positionsSchema}=require("../schemas/positionsSchema.jsx")
const positionsModel= new model("position",positionsSchema);

module.exports={positionsModel}