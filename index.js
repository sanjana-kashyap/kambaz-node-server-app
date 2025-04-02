import express from 'express'
import Hello from './hello.js'
import Lab5 from './Lab5/index.js';
import cors from "cors";

const app = express();

console.log("starting up server....");

app.use(cors());
app.use(express.json());

Hello(app);
Lab5(app);

app.listen(4000, () => console.log("Server running on port 4000!!"));

