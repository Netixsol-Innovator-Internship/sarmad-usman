const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const swaggerUi = require("swagger-ui-express");
const swaggerDocument = require("./swagger");
const tasksRouter = require("./routes/tasks");

const app = express();
const port = 8000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Swagger Docs Route
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Task Routes
app.use("/api/tasks", tasksRouter);

// Start the server
// app.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}`);
// });
module.exports = app;
