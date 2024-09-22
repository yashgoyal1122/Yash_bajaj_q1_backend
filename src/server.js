const express = require("express");
const bodyParser = require("body-parser");
const multer = require("multer");
const cors = require("cors");

const app = express();
app.use(cors());

app.use(express.json());
const PORT = process.env.PORT || 3000;

const bfhlRoutes = require("./routes/bfhl");
app.use("/bfhl", bfhlRoutes);

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
