const Item = require('../schemas/Items.js');

module.exports = (itemId) => {
  Item.findByIdAndRemove(itemId, (err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log(`Deleted item with id: ${itemId}`);
    }
  });
};