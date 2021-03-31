require("dotenv").config();
const massive = require("massive");
const express = require("express"),
  ctrlAdmin = require("./controllers/admin"),
  ctrlComp = require("./controllers/comps"),
  ctrlPost = require("./controllers/posts"),
  ctrlUser = require("./controllers/user"),
  stripeCtrl = require('./controllers/payments'),
  auth = require("./middleware/authCheck");
  mailCtrl = require('./controllers/mailer')
const session = require("express-session");
const stripe = require('stripe')(process.env.SECRET_KEY)


const {CONNECTION_STRING, SERVER_PORT, SESSION_SECRET} = process.env;

const app = express();



app.set('stripe', stripe)
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
  app.set('db', db);
  console.log("db connected");
  app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`);
  });
});


// * comps endpoints for non members
app.get('/api/comp-nm/:component_id', ctrlComp.readComp)

// * posts endpoints for non members
// app.get('/api/post-nm', ctrlPost.readPost)

// * member comps endpoint
app.get('/api/member-comp', auth.userOnly, ctrlComp.readAllComp)
app.post('/api/create-comp', auth.userOnly, ctrlComp.createComp)
app.delete('/api/delete-comp/:compId', auth.userOnly, ctrlComp.deleteComp)
app.get('/api/get_comp_type/:component_type', auth.userOnly, ctrlComp.readCompType)


//mailer endpoint
app.post('/api/mail', mailCtrl.sendEmailComp)
app.post('/api/mail/contact', mailCtrl.sendEmailContact)

// * member posts endpoint
app.get('/api/member-posts', auth.userOnly, ctrlPost.readAllPosts)
app.post('/api/create-post', auth.userOnly, ctrlPost.createPost)
// app.put('/api/edit-post/:postId', auth.userOnly, ctrlPost.editPost)
app.delete('/api/delete-post/:postId', auth.userOnly, ctrlPost.deletePost)

// * user endpoints
app.get('/api/auth/user', auth.userOnly, ctrlUser.getUser)
app.post('/api/auth/register', ctrlUser.register)
app.post('/api/auth/login', ctrlUser.login)
app.post('/api/auth/logout', ctrlUser.logout)
// app.put('/auth/edit_user', auth.userOnly, ctrlUser.editUser)
app.delete('/api/auth/delete_user', auth.userOnly, ctrlUser.deleteUser)

// * admin endpoints
// app.get('/api/admin-get', auth.adminOnly, ctrlAdmin.getUser)
// app.post('/api/admin-create', auth.adminOnly, ctrlAdmin.create)
// app.put('/api/admin-edit/:id', auth.adminOnly, ctrlAdmin.edit)
// app.delete('/api/admin-delete/:id', auth.adminOnly, ctrlAdmin.delete)

// * stripe endpoint
app.post('/api/payment', stripeCtrl.makePayment)