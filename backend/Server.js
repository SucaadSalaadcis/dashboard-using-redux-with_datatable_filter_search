const express = require ('express')
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const app = express()
const cors = require('cors')
const cookieParser  = require("cookie-parser")


dotenv.config();

app.use(express.json());
// , credentials: true
app.use(cors({
    origin: ['http://localhost:5173'],
    credentials: true
}))

app.use(cookieParser ());

mongoose.connect(process.env.DB).then(()=>{
    console.log("Database connection established")
}).catch((err) => console.log(err))

const userRoute = require('./routes/userRoute');
const categoryRoute = require('./routes/Category');

app.use('/auth',userRoute); 
app.use('/category',categoryRoute); 

app.listen(3000, () => console.log("Server is Runing on port 3000")) 