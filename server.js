// Dependencies

const express = require('express');
const path = require('path');
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");

// Sets up the Express App

const app = express();
const PORT =  process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

// Routes

app.use("/", htmlRoutes);
app.use("/api/", apiRoutes);


// Starts the server to begin listening

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
