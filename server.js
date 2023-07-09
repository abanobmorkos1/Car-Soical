// import dependencies
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const methodOverride = require('method-override');

// express application
const app = express();

// middleware
app.use(morgan('dev')); // log requests to the console
app.use(methodOverride('_method')); //override with post having ?_method=DELETE or ?_method=put
app.use(express.static('public')); // serve static files from the public folder

// Routes

app.get('/' , (req, res) => {
    res.render('signup.ejs')
})


// listen 
const PORT = process.env.PORT || 3000;

app.listen(process.env.PORT || 3000, () => {
    console.log(`listening on port ${PORT}`);
});