module.exports = {
  payment: async (req, res) => {
    const DOMAIN = 'http://localhost:3000/#/'
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'One-Time Membership'
            },
            unit_amount: 399,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${DOMAIN}?success=true`,
      cancel_url: `${DOMAIN}?canceled=true`
    })
  }
}