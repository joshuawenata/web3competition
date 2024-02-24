import { PrismaClient } from '@prisma/client'
import express from 'express'

const app = express()
const port = 4000
const prisma = new PrismaClient();

app.use(express.json());
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

app.post('/register-account', async (req, res) => {
  const data = req.body;
  const newUser = await prisma.user.create({data})
  res.status(201).send(newUser);
})

app.listen(port, () => {
  console.log(`Server run on port ${port}`)
})