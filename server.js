// import dependencies
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session'); 
const userSchema = require('./models/user'); // schema for users
const garageSchema = require('./models/garage'); // schema for cars
const routesSchema = require('./models/routes'); // schema for routes
const garageRouter = require('./controllers/garage');  
const routesRouter = require('./controllers/routes'); 
const userRouter = require('./controllers/user'); 
const bcrypt = require('bcryptjs'); 
const mongoStore = require('connect-mongo');
const app = express();
const router = express.Router();

// middleware
app.use(morgan('dev')); // log requests to the console
app.use(methodOverride('_method')); //override with post having ?_method=DELETE or ?_method=put
app.use(express.static('public')); // serve static files from the public folder
app.use(express.urlencoded ({ extended: true })); 
app.use(session({
    secret: process.env.SECRET,
    store: mongoStore.create({ mongoUrl: process.env.DATABASE_URL}),
    saveUninitialized: true, 
    resave: false,
}));
// Routes
app.use('/user', userRouter); 
app.use('/garage', garageRouter); 
app.use('/route', routesRouter); 

// listen 
const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on port ${PORT}`);
});