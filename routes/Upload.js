const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const router = express.Router();

// Ensure uploads folder exists
const uploadDir = path.join(__dirname, '..', 'uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage });

// In-memory store for uploaded resources
const uploadedResources = [];

router.post('/', upload.array('files', 10), (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).json({ message: 'No files uploaded' });
  }

  const resources = req.files.map(file => {
    const resource = {
      originalname: file.originalname,
      filename: file.filename,
      module: req.body.module,
      type: req.body.type,
      path: `/uploads/${file.filename}`
    };
    uploadedResources.push(resource);
    return resource;
  });

  res.status(200).json({ resources });
});

router.get('/list/:module', (req, res) => {
  const moduleCode = req.params.module;
  const filtered = uploadedResources.filter(r => r.module === moduleCode);
  res.json({ resources: filtered });
});

module.exports = router;
