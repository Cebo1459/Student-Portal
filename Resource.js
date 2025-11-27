const mongoose = require('mongoose');

const resourceSchema = new mongoose.Schema({
    moduleId: String,      // e.g. 'ppa', 'dsa', etc.
    type: String,          // 'PDF', 'Video', 'Notes'
    title: String,         // Resource title
    size: String,          // e.g. '2.5 MB'
    filePath: String       // Path to file on server, e.g. './resources/ppa-guide.pdf'
});

module.exports = mongoose.model('Resource', resourceSchema);