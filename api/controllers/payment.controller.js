require('dotenv').config()

const stripe = require('stripe')(process.env.STRIPE_PRIVATE_KEY)

const {User} = require('../models/user.model')

const create_payment = async (req, res) => {
    try {
        
        const client = await stripe.paymentMethods.create({
            payment_methods_types : 'card',
            mode: 'payment',
            card: {
                number: '4242424242424242',
                exp_month: 4,
                exp_year: 2023,
                cvc: '314',
            }
        })

        if (client) return res.status(200).send(client)

    } catch (error) {

        res.status(500).json({ error: error.message })
    }
}

module.exports = create_payment