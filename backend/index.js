require('dotenv').config();
const express = require("express");
const mongoose = require('mongoose');
const bodyParser=require('body-parser')
const cors=require('cors')

const { positionsModel } = require("./models/positionsModel") // Corrected folder name
const { HoldingModel } = require("./models/HoldingModel") // Corrected folder name
const { OrderModel } = require("./models/OrderModel") // Corrected folder name

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const app = express();

app.use(cors({
  origin: 'https://dashboard-eta-lake.vercel.app',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  credentials: true
}));
app.use(express.json());

// app.get('/addPositions', async (req, res) => {
//     let tempPositions = [
//         {
//             product: "CNC",
//             name: "EVEREADY",
//             qty: 2,
//             avg: 316.27,
//             price: 312.35,
//             net: "+0.58%",
//             day: "-1.24%",
//             isLoss: true,
//         },
//         {
//             product: "CNC",
//             name: "JUBLFOOD",
//             qty: 1,
//             avg: 3124.75,
//             price: 3082.65,
//             net: "+10.04%",
//             day: "-1.35%",
//             isLoss: true,
//         },
//     ];
//     tempPositions.forEach((item) => {
//         let newPosition = new positionsModel({
//             product: item.product,
//             name: item.name,
//             qty: item.qty,
//             avg: item.avg,
//             price: item.price,
//             net: item.net,
//             day: item.day,
//             isLoss: item.isLoss,
//         });
//         newPosition.save();
//     })
//     res.send("Done Data Inserted!")
// })

app.get("/allHoldings",async(req,res)=>{
    let allHoldings=await HoldingModel.find({});
    res.json(allHoldings);

});

app.get("/allPositions",async(req,res)=>{
    let allPositions=await positionsModel.find({});
    res.json(allPositions);

})

app.post("/newOrder",async(req,res)=>{
    let {name,qty,price,mode}=req.body;
    let newOrder=new OrderModel({
        name,
        qty,
        price,
        mode
    })
    await newOrder.save();
    res.send("Order Placed Successfully");
})

app.get("/allOrders",async(req,res)=>{
    let allOrders=await OrderModel.find({});
    res.json(allOrders);
});

mongoose.connect(uri)
    .then(() => {
        console.log("DB Connected Successfully");
    })
    .catch((err) => {
        console.error("DB Connection Error:", err);
    });

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});