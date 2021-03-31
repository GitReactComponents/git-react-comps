module.exports = {
  // makePayment: (req, res) => {
  //   console.log('magic')
  //   const stripe = req.app.get('stripe')
  //   const {token, amount} = req.body
  //   console.log(token)
  //   console.log('hello')
  //   stripe.charges.create(
  //     {
  //       amount, 
  //       currency: 'usd',
  //       source: token.id,
  //       description: 'One-Time Membership',
  //       // apiKey: process.env.SECRET_KEY
  //     }, 
  //     (err, charge) => {
  //       if (err) {
  //         console.log(err)
  //         return res.sendStatus(500)
  //       }
  //       res.sendStatus(200)
  //     }
  //   )
  // }
  makePayment: (req, res) => {
    const stripe = req.app.get("stripe")
    const { token, amount } = req.body
    stripe.charges.create(
      {
        amount,
        currency: "usd",
        source: token.id,
        description: "this is a test",
      },
      (err, charge) => {
        if (err) {
          console.log(err.message)
          return res.sendStatus(500)
        }
        console.log(charge)
        return res.sendStatus(200)
      }
    )
  }
}