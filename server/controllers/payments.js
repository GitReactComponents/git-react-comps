module.exports = {
  makePayment: (req, res) => {
    const stripe = req.app.get('stripe')
    const {token, amount} = req.body
    console.log(token)
    stripe.charges.create(
      {
        amount, 
        currency: 'usd',
        source: token.id,
        description: 'One-Time Membership',
        apiKey: process.env.SECRET_KEY
      }, 
      (err, charge) => {
        if (err) {
          console.log(err.message)
          res.sendStatus(500)
        }
        console.log(err.message)
        res.sendStatus(500)
      }
    )
  }
}