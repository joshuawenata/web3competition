# HAKI 

## Prerequisites

- dfx > 0.15.0-ext.0
- Nodejs >= 18.16.0
- yarn
- jq (Command line based JSON processor).
    
Follwing are the steps to deploy your application locally

1. Install wsl:

    `wsl --install`

2. Install jq

    `sudo apt update && sudo apt install -y jq`
   
3. Install dfx:

   `DFX_VERSION=0.15.0 sh -ci "$(curl -fsSL https://sdk.dfinity.org/install.sh)"`

4. Add dfx to your path

   `echo 'export PATH="$PATH:$HOME/bin"' >> "$HOME/.bashrc"`

5. Install nvm

   ```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash```
   <br>
   `nvm use 18`

6. Install dependencies:

    `npm i yarn`
   <br>
    `yarn`
   <br>
    `cd server`
   <br>
   `yarn`
   <br>
   `cd ..`

7. Create database

    `yarn prisma migrate dev`
    <br>
    `yarn prisma db pull`
    <br>
    `yarn prisma studio`

8. Run seeder for admin account

    `node seeder.js`

9. Run server

    `cd server`
    <br>
    `nodemon server.mjs`
    
10. Run app locally

    `npm run dev`

Following are the steps to deploy your application in blockchain environment:

1. To deploy run:
    
    `dfx start --clean --background`
    
    `bash scripts/deploy_frontend_canister.sh  local`

2. To Stop Replica run:
    
    `dfx stop`

