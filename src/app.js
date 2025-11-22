import express from "express"; // npm install express

const app = express(); // create an Express App

/**
 * Parses incoming JSON request bodies and puts the result in req.body.
 * Without this, req.body would be undefined for JSON requests.
 */
app.use(express.json());

// routes import
import router from "./routes/user.route.js"; // ! remember (.js)

// routes declaration
app.use("/api/v1/users", router);

// example route: http//localhost:4000/api/v1/users/register

export default app;
