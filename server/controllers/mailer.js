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
            `     <h4 style='font-weight:bolder;'>'Type:' ${type}</h4>
                  <h4 style='font-weight:bolder;'>'Title:' ${title}</h4>
                  <h4 style='font-weight:bolder;'>'HTML:' ${html}</h4>
                  <h4 style='font-weight:bolder;'>'SCSS:' ${scss}</h4>
                  <h4 style='font-weight:bolder;'>'JS:' ${js}</h4>`
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
            `     <h4 style='font-weight:bolder;'>'Name: '${name}</h4>
                  <h4 style='font-weight:bolder;'>'Email: '${email}</h4>
                  <h4 style='font-weight:bolder;'>'Message: '${message}</h4>`
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