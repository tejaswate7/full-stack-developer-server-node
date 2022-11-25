import mongoose from "mongoose"
import express from 'express'
import cors from 'cors'
import HelloController from "./controllers/hello-controller.js";
import UserController from "./controllers/users/users-controller.js";
import TuitsController from "./controllers/tuits/tuits-controller.js";
import MoviesController from "./controllers/movies/movies-controller.js";


const CONNECTION_STRING = process.env.DB_CONNECTION_STRING
    || 'mongodb://localhost:27017/tuiter'
const options = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    serverSelectionTimeoutMS: 5000,
    autoIndex: false, // Don't build indexes
    maxPoolSize: 10, // Maintain up to 10 socket connections
    socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
}

mongoose.connect(CONNECTION_STRING, options);

const app = express();
app.use(cors())
app.use(express.json());
HelloController(app);
UserController(app);
TuitsController(app);
MoviesController(app);
// app.listen(4000);
app.listen(process.env.PORT || 4000);