const nodemailer = require('nodemailer')

const {EMAIL, PASSWORD} = process.env;


module.exports = {

  readAllComp: async (req, res) => {
    const db = req.app.get('db');
    const comps = await db.comps_db.get_all_comps();
    res.status(200).send(comps);
  },

  readCompType: async (req, res) => {
    const db = req.app.get('db')
    const comps = await db.comps_db.get_comp_type()
    res.status(200).send(comps)
  },

  readComp: async (req, res) => {
    const db = req.app.get('db')
    const comp = await db.comps_db.get_comp(component_id)
    res.status(200).send(comp)
  }, 

  createComp: async (req, res) => {
    const db = req.app.get('db')
    const newComp = await db.comps_db.create_comp(component_type, component_image, component_info, userId, username)
    res.status(200).send(newComp)
    await transporter.sendMail(
      {
        from: req.session.user.email,
        to: `${EMAIL}`,
        subject: `New Component Submission`,
        text: `this is a test`
      }
    )
  },

  deleteComp: async (req, res) => {
    const db = req.app.get('db')
    const deletedComp = await db.comps_db.delete_comp(component_id)
    res.sendStatus(200)
  }
}