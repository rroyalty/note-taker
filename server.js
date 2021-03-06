// Dependencies

const express = require('express');
const path = require('path');
const htmlRoutes = require("./routes/htmlRoutes");

// Sets up the Express App

const app = express();
const PORT =  process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes

app.use("/", htmlRoutes);

// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
