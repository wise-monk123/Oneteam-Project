const Post = require("./models/post");

const passport = require('passport');
const express = require('express');
const serveStatic = require('serve-static');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');
const mongoose = require('mongoose');

const auth = require('./config/auth');
const authRoutes = require('./routes/auth');

const CONNECTION_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/posts';
const PORT = process.env.PORT || 8081;

const app = express();

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use("/", serveStatic (path.join (__dirname, '../dist')));
app.use(morgan('combined'));
app.use(bodyParser.json());
app.use(cors());

auth(passport);
app.use(passport.initialize());

// set up auth routes
app.use('/auth', authRoutes);

// Fetch all posts
app.get('/posts', (req, res) => {
  Post.find({}, 'title description', function (error, posts) {
    if (error) { console.error(error); }
    res.send({
      posts: posts
    })
  }).sort({_id:-1})
});

mongoose.connect(CONNECTION_URI);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error"));
db.once("open", function(callback){
  console.log("Connection Succeeded");
});

// Add new post
app.post('/posts', (req, res) => {
  var db = req.db;
  var title = req.body.title;
  var description = req.body.description;
  var new_post = new Post({
    title: title,
    description: description,
  });

  new_post.save(function (error) {
    if (error) {
      console.log(error)
    }
    res.send({
      success: true,
      message: 'Post saved successfully!'
    });
  });
});

// Catch all routes and redirect to the index file
app.get('*', function (req, res) {
  res.sendFile(__dirname + '/dist/index.html');
});

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
