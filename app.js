import express from 'express';
import dotenv from 'dotenv';

const app = express();
dotenv.config();

app.use(express.json());


app.listen(process.env.PORT || 4000, () => 
   console.log(`Server has started.`));
