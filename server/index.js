require("dotenv").config();
const massive = require("massive");
const express = require("express"),
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

// * logged in comps endpoint
app.get('/api/member-comp', auth.userOnly, ctrlComp.readComp)
app.delete('/api/personalpost/:compId', auth.userOnly, ctrlComp.deleteComp)
app.put('/api/personalpost/:compId/', auth.userOnly, ctrlComp.editComp)

// * member comps endpoint
app.get('/api/member-comp', auth.userOnly, ctrlComp.readAllComp)
app.post('/api/create-comp', auth.userOnly, ctrlComp.createComp)
app.delete('/api/personal-post/:compId', auth.userOnly, ctrlComp.deleteComp)
app.put('/api/personal-post/:compId', auth.userOnly, ctrlComp.editComp)

// * posts endpoints
app.get('/api/posts', auth.userOnly, ctrlPost.readPosts)
app.post('/api/posts', auth.userOnly ,ctrlPost.createPost)
app.delete('/api/posts', auth.userOnly, ctrlPost.deletePost)

// * user endpoints
app.get('/api/user', auth.userOnly, ctrlUser.getUser)
app.put('/api/edit_user', auth.userOnly, ctrlUser.editUser)
app.post('/api/login', ctrlUser.login)
app.post('/api/logout', ctrlUser.logout)
app.post('/api/auth/register', ctrlUser.register)
app.delete('/api/delete-user/:userId', auth.userOnly, ctrlUser.deleteUser)
