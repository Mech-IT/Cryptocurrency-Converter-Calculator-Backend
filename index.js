import express from "express"
import dotenv from "dotenv"

const app = express();


dotenv.config()


// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello, Express!');
});

// Start the server
app.listen(process.env.PORT, () => {
    console.log(`Server is running at http://localhost:${process.env.PORT}`);
});
