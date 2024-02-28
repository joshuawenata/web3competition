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

app.post('/buy-haki', async (req, res) => {
  const data = req.body;
  const newInventory = await prisma.inventory.create({data})
  res.status(201).send(newInventory);
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
  try {
    const uid = req.session.uid;
    res.status(200).json({ uid: uid });
  } catch (error) {
    console.error('Error fetching session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/get-username', async (req, res) => {
  try {
    const uid = req.session.uid;
    const user = await prisma.user.findUnique({
      where:{
        id: uid
      }
    })
    res.status(200).json({ username: user.nama_lengkap });
  } catch (error) {
    console.error('Error fetching session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/getUid', async (req, res) => {
  try {
    const uid = req.session.uid
    console.log(uid)
    res.status(200).json({ uid: uid });
  } catch (error) {
    console.error('Error fetching session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.get('/fetch-see-haki', async (req, res) => {
  const item = await prisma.haki.findMany();
  res.status(201).json({ item: item })
})

app.get('/fetch-inventory', async (req, res) => {
  const uid = req.session.uid;
  const item = await prisma.inventory.findMany({
    where: {
      uid: uid,
    },
  });

  const haki = [];

  // Assuming item is an array
  await Promise.all(item.map(async (element) => {
    try {
      const h = await prisma.haki.findUnique({
        where: {
          id: element.hid
        }
      });
      haki.push(h);
    } catch (error) {
      console.error(`Error fetching haki for element with hid ${element.hid}:`, error);
      // Handle the error as needed
    }
  }));

  // Now, haki array contains the results of all asynchronous operations
  res.status(201).json({ item: haki })
})

app.get('/fetch-your-haki', async (req, res) => {
  try {
    const uid = req.session.uid;
    const item = await prisma.haki.findMany({
      where: {
        uid: uid,
      },
    });
    res.status(201).json({ item: item })
  } catch (error) {
    console.error('Error fetching session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.post('/find-haki', async (req, res) => {
  try {
    const itemid = req.body.itemid;
    const item = await prisma.haki.findMany({
      where: {
        id: parseInt(itemid),
      },
    });
    console.log(item)
    res.status(201).json({ item: item })
  } catch (error) {
    console.error('Error fetching session:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
})

app.listen(port, () => {
  console.log(`Server run on port ${port}`)
})