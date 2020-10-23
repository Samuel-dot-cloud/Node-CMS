const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const hbs = require('express-handlebars');
const { mongoDbUrl, PORT } = require('./config/config');

const app = express();


//Configure mongoose to connect to mongoDB
mongoose.connect(mongoDbUrl, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}).then(response => {
    console.log("MongoDB connected successfully");
}).catch(err => {
    console.log("Database connection failed");
})

// Configure express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


// Setup view engine to use ExpressHandlebars
app.engine('handlebars', hbs({ defaultLayout: 'default' }));
app.set('view engine', 'handlebars');


//routes
const defaultRoute = require('./routes/default_routes');
app.use('/', defaultRoute);

app.listen(PORT, () => {
    console.log(`Server is running on port 3000`)
});