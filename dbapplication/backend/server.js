const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const bodyParser = require('body-parser');

const app = express();
const PORT = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Connect to the database
const db = new sqlite3.Database('./database.db', (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to the SQLite database.');

        // Create table if it doesn't exist
        db.run(`CREATE TABLE IF NOT EXISTS data (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            data TEXT NOT NULL,
            timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
        )`, (err) => {
            if (err) {
                console.error('Error creating table:', err.message);
            }
        });
    }
});

// Route to add data
app.post('/add', (req, res) => {
    const { data } = req.body;
    db.run('INSERT INTO data (data) VALUES (?)', [data], function(err) {
        if (err) {
            res.status(500).json({ message: 'Error inserting data' });
        } else {
            res.status(200).json({ message: 'Data added successfully', id: this.lastID });
        }
    });
});

// Route to read data
app.get('/view', (req, res) => {
    db.all('SELECT * FROM data', [], (err, rows) => {
        if (err) {
            res.status(500).json({ message: 'Error retrieving data' });
        } else {
            res.status(200).json(rows);
        }
    });
});

// Route to update data
app.put('/update', (req, res) => {
    const { id, data } = req.body;
    db.run('UPDATE data SET data = ? WHERE id = ?', [data, id], function(err) {
        if (err) {
            res.status(500).json({ message: 'Error updating data' });
        } else {
            res.status(200).json({ message: 'Data updated successfully' });
        }
    });
});

// Route to delete data
app.delete('/delete', (req, res) => {
    const { id } = req.body;
    db.run('DELETE FROM data WHERE id = ?', [id], function(err) {
        if (err) {
            res.status(500).json({ message: 'Error deleting data' });
        } else {
            res.status(200).json({ message: 'Data deleted successfully' });
        }
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});