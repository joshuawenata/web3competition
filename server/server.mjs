import { PrismaClient } from '@prisma/client'
import express from 'express'
import bcrypt from 'bcryptjs'
import session from 'express-session'
import cors from 'cors'
import crypto from 'crypto'

const app = express()
const port = 4000
const prisma = new PrismaClient();

// init
// Session secret
const sessionSecret = crypto.randomBytes(64).toString('hex');

// init
app.use(express.json());
app.use(
  session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: true,
  })
);
app.use((_req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use(
  cors({
    origin: 'http://localhost:3000',
    credentials: true,
  })
);

//api

app.get('/logout', async function (req, res) {
  try {
    // destroy the user's session to log them out
    // will be re-created next request
    await new Promise((resolve, reject) => {
      req.session.destroy((err) => {
        if (err) {
          reject(err);
        } else {
          resolve();
        }
      });
    });
    res.redirect('/');
  } catch (error) {
    console.error('Error destroying session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.post('/register-account', async (req, res) => {
  const data = req.body;
  const newUser = await prisma.user.create({data})
  res.status(201).send(newUser);
})

app.post('/register-haki', async (req, res) => {
  const data = req.body;
  const newHaki = await prisma.haki.create({data})
  res.status(201).send(newHaki);
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
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  // Verify the password
  const passwordMatch = await bcrypt.compare(data.password, user.password);

  if (!passwordMatch) {
    // Incorrect password
    return res.status(401).json({ success: false, message: 'Invalid credentials' });
  }

  // If you reach here, the login is successful
  req.session.uid = user.id;
  res.status(200).json({ success: true, message: 'Logged in successfully!' });
});

app.get('/api/session', (req, res) => {
  console.log(req.session.uid)
  try {
    // Assuming you have the user information stored in req.session.user
    const uid = req.session.uid;
    res.status(200).json({ uid: uid });
  } catch (error) {
    console.error('Error fetching session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server run on port ${port}`)
})