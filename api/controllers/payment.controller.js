require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)


const create_payment = async (req, res) => {
    try {
        
        const client = await stripe.paymentIntents.create({

            user: req.user.id,
            amount: 2000,
            currency: 'usd',
            payment_method_types: ['card'],
        })
        return res.status(200).send(client)

    } catch (error) {

        res.status(500).json({ error: error.message })
    }
}

module.exports = create_payment