# Kaza - Location d'appartements

Treiziéme projet du parcours "Développeur Front-End" chez OpenClassroom. L'objectif est de créer la section utilisateur d'une application de banking, avec gestion de l'authentification (JWT), React, React-router et Redux.

## Objectifs

1. Mettre en place la landing page, le systême d'authentification et la page de gestion du compte utilisateur.
2. Utiliser un outil de state-management (Redux).
3. Intégrer les maquettes fournies de manière responsive.
4. Définir les besoins de l'API pour la gestions des transactions.
5. Utiliser une documentation Swagger

## Technologies

React / Redux / JSX / TypeScript / React-Router 6.4 / Sass Modules / Vite

## Tester le projet - Back-End

### Prerequisites

Git clone the following repo : git@github.com:OpenClassrooms-Student-Center/Project-10-Bank-API.git

Argent Bank uses the following tech stack:

- [Node.js v12](https://nodejs.org/en/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community)

Please make sure you have the right versions and download both packages. You can verify this by using the following commands in your terminal:

```bash
# Check Node.js version
node --version

# Check Mongo version
mongo --version
```

### Instructions

1. Fork this repo
2. Clone the repo onto your computer
3. Open a terminal window in the cloned project
4. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev:server

# Populate database with two users
npm run populate-db
```

Your server should now be running at http://locahost:3001 and you will now have two users in your MongoDB database!

### Populated Database Data

Once you run the `populate-db` script, you should have two users in your database:

## Tester le projet - Front-End

### Instructions

1. Fork this repo
2. Clone the repo onto your computer
3. Open a terminal window in the cloned project
4. Run the following commands:

```bash
# Install dependencies
npm install

# Start local dev server
npm run dev
```
