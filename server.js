const express = require("express");

const Dish = require('./models/dishModel')

const app = express();
const db = require("./db.js")
app.use(express.json());
const path = require('path')
const dishesRoute = require('./routes/dishesRoute')
const userRoute = require('./routes/userRoute')
const ordersRoute = require('./routes/ordersRoute')

app.use('/foody/dishes/', dishesRoute)
app.use('/foody/users/' , userRoute)
app.use('/foody/orders/' , ordersRoute)


if(process.env.NODE_ENV ==='production')
{
    app.use('/' , express.static('client/build'))

    app.get('*' , (req , res)=>{

        res.sendFile(path.resolve(__dirname  , 'client/build/index.html'))

    })
}

const port = process.env.PORT || 4000;

app.listen(port, () => `Server running on port port 🔥`)