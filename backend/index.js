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

// Body parser middleware
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// CORS configuration
app.use(cors({
  origin: ['https://dashboard-eta-lake.vercel.app', 'http://localhost:5173', 'https://paper-trading-dashboard.vercel.app'],
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Origin', 'X-Requested-With', 'Content-Type', 'Accept', 'Authorization'],
  credentials: true,
  optionsSuccessStatus: 200
}));

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
        console.log('Received order request:', req.body);
        const {name, qty, price, mode, userId, userEmail} = req.body;
        
        if (!userId || !userEmail) {
            console.log('Missing user information:', { userId, userEmail });
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

        console.log('Attempting to save order:', newOrder);
        await newOrder.save();
        console.log('Order saved successfully');
        res.json({ message: "Order Placed Successfully", order: newOrder });
    } catch (error) {
        console.error('Error placing order:', error);
        console.error('Stack trace:', error.stack);
        res.status(500).json({ 
            error: 'Failed to place order',
            details: error.message,
            stack: error.stack
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
