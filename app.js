import express from 'express';
import dotenv from 'dotenv';
import connectDb from './config/db';
import userRouter from './routes/user';

const app = express();
dotenv.config();

app.use(express.json());


app.listen(process.env.PORT || 4000, () => 
   console.log(`Server has started.`));

connectDb();

app.get('/api/v1', (req, res) => {
  res.json({
    message: 'Welcome to Ecommerce API'
  });
});

app.use('/api/v1', userRouter);
