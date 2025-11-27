const express = require('express');
const cors = require('cors');
const path = require('path');
require('dotenv').config();
require('./db'); // This triggers the connection

const authRoutes = require('./routes/Auth');
const uploadRoutes = require('./routes/Upload');
const downloadRoutes = require('./routes/Download');

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/auth', authRoutes);
app.use('/upload', uploadRoutes);

app.use('/download-files', express.static(path.join(__dirname, 'Download')));

app.use('/download', downloadRoutes);


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🚀 Server running at http://localhost:${PORT}`);
});