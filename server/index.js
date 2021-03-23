require("dotenv").config();
const massive = require("massive");
const express = require("express"),
  ctrlAdmin = require("./controllers/admin"),
  ctrlComp = require("./controllers/comps"),
  ctrlPost = require("./controllers/posts"),
  ctrlUser = require("./controllers/user"),
  auth = require("./middleware/authCheck");
const session = require("express-session");

const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;

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


// * comps endpoints for non members
app.get('/api/comp-nm', ctrlComp.readComp)

// * posts endpoints for non members
app.get('/api/posts-nm', ctrlPost.readPosts)

// * member comps endpoint
app.get('/api/member-comp', auth.userOnly, ctrlComp.readAllComp)
app.post('/api/create-comp', auth.userOnly, ctrlComp.createComp)
app.put('/api/personal-post/:compId', auth.userOnly, ctrlComp.editComp)
app.delete('/api/personal-post/:compId', auth.userOnly, ctrlComp.deleteComp)

// * member posts endpoint
app.get('/api/member-posts', auth.userOnly, ctrlComp.readAllPosts)
app.post('/api/create-post', auth.userOnly, ctrlPost.createPost)
app.put('/api/edit-post', auth.userOnly, ctrlPost.editPost)
app.delete('/api/delete-post/:postId', auth.userOnly, ctrlPost.deletePost)

// * user endpoints
app.get('/api/auth/user', auth.userOnly, ctrlUser.getUser)
app.post('/api/auth/register', ctrlUser.register)
app.post('/api/auth/login', ctrlUser.login)
app.post('/api/auth/logout', ctrlUser.logout)
app.put('/api/auth/edit_user', auth.userOnly, ctrlUser.editUser)
app.delete('/api/auth/delete_user/:userId', auth.userOnly, ctrlUser.deleteUser)

// * admin endpoints
app.get('/api/admin-get', auth.adminOnly, ctrlAdmin.getUser)
app.post('/api/admin-create', auth.adminOnly, ctrlAdmin.create)
app.put('/api/admin-edit/:id', auth.adminOnly, ctrlAdmin.edit)
app.delete('/api/admin-delete/:id', auth.adminOnly, ctrlAdmin.delete)