import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import postRoutes from './routes/posts.js';

const app = express();

app.use('/', postRoutes);

app.use(express.json({ limit: "30mb", extended: true}));
app.use(express.urlencoded({ limit: "30mb", extended: true}));
app.use(cors());

const CONNECTION_URL = 'mongodb+srv://andrewpalet:andrewpalet123@cluster0.2xct6.mongodb.net/?retryWrites=true&w=majority';
const PORT = process.env.PORT || 4000;

mongoose.connect(CONNECTION_URL)
    .then(() => app.listen(PORT, () => console.log(`Server running on port: ${PORT}`)))
    .catch((error) => console.log(error.message));
