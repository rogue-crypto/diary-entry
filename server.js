const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3000;

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.get('/pastentries', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'pastentries.html'));
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
