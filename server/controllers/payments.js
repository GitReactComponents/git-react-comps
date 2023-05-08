module.exports = {
  makePayment: (req, res) => {
    const stripe = req.app.get("stripe");
    const { token, amount } = req.body;
    stripe.charges.create(
      {
        amount,
        currency: "usd",
        source: token.id,
        description: "One-Time Membership",
      },
      (err, charge) => {
        if (err) {
          return res.sendStatus(500);
        }
        return res.sendStatus(200);
      }
    );
  },
};
