// models/Resource.js
const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    moduleId: { type: String, required: true },
    type: { type: String, required: true },
    title: { type: String, required: true },
    size: { type: String, required: true },
    filePath: { type: String, required: true } // Store the file path
});

module.exports = mongoose.model('Resource', resourceSchema);