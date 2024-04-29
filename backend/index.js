// Backend index.js Handle flowerViews + table db
const express = require('express');
const cors = require('cors');
const sqlite = require('sqlite');
const sqlite3 = require('sqlite3');

const app = express();
const port = process.env.PORT || 5001; // för att publicera ett backend

app.use(cors())

//svara på get anrop och hämta flowers från db
// Svara på get-anrop och hämta alla blommor från db
app.get('/flowers', async (req, res) => {
  try {
    // Öppna anslutning till databasen
    const db = await sqlite.open({
      filename: 'flowers.db',
      driver: sqlite3.Database
    });

    await db.run('PRAGMA foreign_keys = ON');

    // Hämta alla blommor från databasen
    const flowers = await db.all('SELECT * FROM flowers');

    // Stäng anslutning till databasen
    await db.close();

    res.json(flowers);
  } catch (error) {
    console.error('Error fetching flowers:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
})

app.get('/flowers/:id', async (req, res) => {
  try {
    // Öpnna anslutning till databasen
    const db = await sqlite.open({
      filename: 'flowers.db',
      driver: sqlite3.Database
    });

    await db.run('PRAGMA foreign_keys = ON') // Här var felet
    // Returnera blomman som JSON-svar

    // Hämta blomman med det angivna id:et från databasen
    const flower = await db.get('SELECT * FROM flowers WHERE id = ?', req.params.id);

    // Stäng anslutning till databasen
    await db.close();

    res.json(flower);
  } catch (error) {
    console.error('Error fetching flower:', error);
    res.status(500).json({ error: 'Something went wrong' });
  }
})

// app ska lyssna en port

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
