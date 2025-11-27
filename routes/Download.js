const express = require('express');
const fs = require('fs');
const path = require('path');
const router = express.Router();

const downloadDir = path.join(__dirname, '..', 'Download');

router.get('/list', (req, res) => {
  fs.readdir(downloadDir, (err, files) => {
    if (err) {
      return res.status(500).json({ message: 'Failed to read download folder' });
    }

    const fileList = files.map(file => ({
      name: file,
      url: `/download-files/${file}`
    }));

    res.json({ files: fileList });
  });
});

module.exports = router;