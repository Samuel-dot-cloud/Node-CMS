const { response } = require('express');
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

//Configure mongoose to connect to mongoDB
mongoose.connect('mongodb://localhost:27017/blog-cms', {
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


// routes
app.use('/', (req, res) => {
    res.send("Welcome the the CMS app");
});

app.listen(3000, () => {
    console.log(`Server is running on port 3000`)
});