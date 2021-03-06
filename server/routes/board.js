const router = require('express').Router();
const passport = require('passport');

let Items = require('../models/items');

router.post('/items', (req, res) => {

  var db = req.db;
  var item_text = req.body.itemText;
  var item_Id = req.body.itemId;
  var item_status = req.body.status;
  var item_owner = req.body.owner;
  //console.log(req)
 // console.log(item_owner);

  var new_item = new Items({
    itemId: item_Id,
    text: item_text,
    status: item_status,
    owner:item_owner
  })

  new_item.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Item saved successfully!',
      itemNumber: new_item.itemId
    });
  });
});

router.get('/items', (req, res) => {
  Items.find({}, 'itemId text status owner', function (error, items) {
    if (error) { console.error(error); }
    res.send({
      items: items
    })
  }).sort({ itemId:-1 });
});

// Fetch single task
router.get('/items/:itemId', (req, res) => {
  Items.findOne({"itemId":req.params.itemId},'itemId text status', function (error, items) {
    if (error) { console.error(error) }
    res.send(items);
  })
});

  // Update a task
router.put('/items/:id', (req, res) => {
  Items.findOne({"_id": req.params.id}, 'text status', function (error, items) {
    if (error) { console.error(error); }
    items.text = req.body.text;
    items.status = req.body.status;
    items.save(function (error) {
      if (error) {
        console.log(error);
      }
      res.send({
        success: true,
      });
    });
  });
});

router.delete('/items/:id', (req, res) => {
  Items.deleteOne({
    "_id": req.params.id
  }, function(err, post) {
    if (err) {
      res.send(err);
    }
    res.send({
      success: true
    });
  });
});

module.exports = router;
