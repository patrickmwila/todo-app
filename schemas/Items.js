const mongoose = require('mongoose');

// create todo item schema
const itemsSchema = mongoose.Schema({
  name: String
});

// export a collection model for itemsSchema
module.exports = mongoose.model('Item', itemsSchema);