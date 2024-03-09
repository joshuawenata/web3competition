# HAKI 

## Prerequisites

- Nodejs >= 18.16.0
    
Follwing are the steps to deploy your application locally

1. Install dependencies:

    `npm i yarn`
   <br>
    `yarn`
   <br>
    `cd server`
   <br>
   `yarn`
   <br>
   `cd ..`

2. Create database [terminal 1]

    `yarn prisma migrate dev`
    <br>
    `yarn prisma db pull`
    <br>
    `yarn prisma studio`

3. Run seeder for admin account

    `node seeder.js`

4. Run server [terminal 2]

    `cd server`
    <br>
    `nodemon server.mjs`
    
5. Run app locally [terminal 3]

    `npm run dev`


