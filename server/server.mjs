import { PrismaClient } from '@prisma/client'
import express from 'express'
import bcrypt from 'bcryptjs'

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

app.post('/login-account', async (req, res) => {
  const data = req.body;
  const user = await prisma.user.findUnique({
    where: {
      email: data.email,
    },
  });
  
  if (!user) {
    // User not found
    return { success: false, message: 'Invalid credentials' };
  }
  
  // Verify the password
  const passwordMatch = await bcrypt.compare(data.password, user.password);
  
  if (!passwordMatch) {
    // Incorrect password
    return { success: false, message: 'Invalid credentials' };
  }

  // If you reach here, the login is successful
  console.log('hello')
  res.status(200).json({ success: true, message: 'Logged in successfully!' });
})

app.listen(port, () => {
  console.log(`Server run on port ${port}`)
})