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

// MongoDB connection
mongoose.connect(uri, { 
  useNewUrlParser: true, 
  useUnifiedTopology: true 
})
.then(() => console.log('Connected to MongoDB'))
.catch(err => console.error('MongoDB connection error:', err));

const app = express();
app.use(cors())

// CORS configuration
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'https://dashboard-eta-lake.vercel.app');
  res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Credentials', 'true');
  
  // Handle preflight requests
  if (req.method === 'OPTIONS') {
    return res.sendStatus(200);
  }
  next();
});

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



app.use(cors());
app.get("/allHoldings",async(req,res)=>{
    try {
        let allHoldings=await HoldingModel.find({});
        res.json(allHoldings);
    } catch (error) {
        console.error('Error fetching holdings:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get("/allPositions",async(req,res)=>{
    try {
        let allPositions=await positionsModel.find({});
        res.json(allPositions);
    } catch (error) {
        console.error('Error fetching positions:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
})

app.post("/newOrder",async(req,res)=>{
    try {
        const {name, qty, price, mode, userId, userEmail} = req.body;
        
        if (!userId || !userEmail) {
            return res.status(400).json({ error: 'User information is required' });
        }

        const newOrder = new OrderModel({
            name,
            qty,
            price,
            mode,
            userId,
            userEmail
        });

        await newOrder.save();
        res.json({ message: "Order Placed Successfully", order: newOrder });
    } catch (error) {
        console.warn('Error placing order:', error);
        res.status(500).json({ 
            error: 'Failed to place order',
            details: error.message
        });
    }
})

app.get("/allOrders",async(req,res)=>{
    try {
        let allOrders=await OrderModel.find({});
        res.json(allOrders);
    } catch (error) {
        console.error('Error fetching orders:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

app.get("/", (req, res) => {
    res.send("Server is running!");
});

app.listen(PORT, () => {
    console.log(`Server started on port ${PORT}`);
});
