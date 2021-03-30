const nodemailer = require('nodemailer')
require("dotenv").config();

const {EMAIL, PASSWORD} = process.env;

module.exports = {
  sendEmailComp: async (req, res) => {
    const {type, title, html, scss, js} = req.body
    let transporter=nodemailer.createTransport({
      service: 'gmail',
      auth: {user: EMAIL,
            pass: PASSWORD}
    })
    let message = {
      from: 'gitreactcomps@gmail.com',
      to: 'gitreactcomps@gmail.com',
      subject: 'New Comp Submission',
       html: 
            `     <h1 style='font-weight:bolder;'>${title}</h1>
                  <h3 style='font-weight:bolder;'>${type}</h3>
                  <h3 style='font-weight:bolder;'>${html}</h3>
                  <h3 style='font-weight:bolder;'>${scss}</h3>
                  <h3 style='font-weight:bolder;'>${js}</h3>`
    }
          transporter.sendMail( message, function( err ) {
            if (err) {
                console.log( err )
                res.sendStatus(500)
             } else {
                 console.log('Email Sent Successfully')
                 res.sendStatus(200)
             }
             })},

sendEmailContact: async (req, res) => {
    const {name, email, message} = req.body
    let transporter=nodemailer.createTransport({
      service: 'gmail',
      auth: {user: EMAIL,
            pass: PASSWORD}
    })
    let contactMessage = {
      from: 'gitreactcomps@gmail.com',
      to: 'gitreactcomps@gmail.com',
      subject: 'Contact Us Request',
       html: 
            `     <h1 style='font-weight:bolder;'>${name}</h1>
                  <h3 style='font-weight:bolder;'>${email}</h3>
                  <h3 style='font-weight:bolder;'>${message}</h3>`
    }
          transporter.sendMail( contactMessage, function( err ) {
            if (err) {
                console.log( err )
                res.sendStatus(500)
             } else {
                 console.log('Email Sent Successfully')
                 res.sendStatus(200)
             }
             })}
             }