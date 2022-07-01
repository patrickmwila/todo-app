const Item = require('../schemas/Items');

module.exports = (itemName) => {
  itemName = new Item({
    name: itemName
  });
  itemName.save();
};