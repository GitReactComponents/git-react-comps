require("dotenv").config();
const massive = require("massive");
const express = require("express"),
  ctrlAdmin = require("./controllers/admin"),
  ctrlComp = require("./controllers/comps"),
  ctrlPost = require("./controllers/posts"),
  ctrlUser = require("./controllers/user"),
  stripeCtrl = require('./controllers/payments'),
  auth = require("./middleware/authCheck"),
  mailCtrl = require('./controllers/mailer');
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


// * member comps endpoint
app.get('/api/member-comp', auth.userOnly, ctrlComp.readAllComp)
app.post('/api/create-comp', auth.userOnly, ctrlComp.createComp)
app.delete('/api/delete-comp/:compId', auth.userOnly, ctrlComp.deleteComp)
app.get('/api/get_comp_type/:component_type', auth.userOnly, ctrlComp.readCompType)
app.get('/api/get_comp/:component_id', auth.userOnly, ctrlComp.readComp)


// * mailer endpoint
app.post('/api/mail', mailCtrl.sendEmailComp)
app.post('/api/mail/contact', mailCtrl.sendEmailContact)


// * member posts endpoint
app.get('/api/member-posts/:component_id', auth.userOnly, ctrlPost.readAllPosts)
app.post('/api/create-post', auth.userOnly, ctrlPost.createPost)
// app.put('/api/edit-post/:postId', auth.userOnly, ctrlPost.editPost)
app.delete('/api/delete-post/:postId', auth.userOnly, ctrlPost.deletePost)


// * user endpoints
app.get('/api/auth/user', ctrlUser.getUser)
app.post('/api/auth/register', ctrlUser.register)
app.post('/api/auth/login', ctrlUser.login)
app.post('/api/auth/logout', ctrlUser.logout)
app.put('/api/auth/update/:id', auth.userOnly, ctrlUser.editUser)
// app.put('/auth/edit_user', auth.userOnly, ctrlUser.editUser)
app.delete('/api/auth/delete_user', auth.userOnly, ctrlUser.deleteUser)


// * stripe endpoint
app.post('/api/payment', stripeCtrl.makePayment)