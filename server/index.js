require("dotenv").config();
const massive = require("massive");
const express = require("express"),
  ctrlComp = require("./controllers/comps"),
  ctrlPost = require("./controllers/posts"),
  ctrlUser = require("./controllers/user"),
  auth = require("./middleware/authCheck");
const session = require("express-session");

const { CONNECTION_STRING, SERVER_PORT, SESSION_SECRET } = process.env;

const app = express();

app.use(express.json());
app.use(
  session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { maxAge: 1000 * 60 * 60 },
  })
);

massive({
  connectionString: CONNECTION_STRING,
  ssl: { rejectUnauthorized: false },
}).then((db) => {
  app.set(db);
  console.log("db connected");
  app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
  });
});


// ! comps endpoints for non members
app.get('/api/comp-nm', ctrlComp.readComp)

// ! logged in comps endpoint
app.get('/api/member-comp', auth.userOnly, ctrlComp.readComp)
app.delete('/api/personalpost/:compId', auth.userOnly, ctrlComp.deleteComp)
app.put('/api/personalpost/:compId', auth.userOnly, ctrlComponents.editComp)

// ! logged in posts endpoint
app.post('/api/create', auth.userOnly, ctrlPost.createPost)
app.put('/api/edit/:postId', auth.userOnly, ctrlPost.editPost)

// ! posts endpoints
app.get('/api/posts', ctrlPost.readPosts)
// app.post('/api/posts', ctrlPost.createPost)
// app.delete('/api/posts', ctrl.deletePost)

// ! user endpoints
app.get('/api/user', auth.userOnly, ctrlUser.getUser)
app.put('/api/edit-user/:userId', auth.userOnly, ctrlUser.editUser)
app.delete('/api/delete-user/:userId', auth.userOnly, ctrlUser.deleteUser)
app.post('/api/auth/register', ctrlUser.register)