const Leader = require('../models/leader.model')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken');


const signUp = async (req, res)=> {
    try {
        const {name, email, adress, number, password} = req.body

        const emailExist = await Leader.findOne({ email: req.body.email });

        if(emailExist) return res.status(400).send("Email Already Exist!");

        const hashedPassword = await bcrypt.hash(password);

        const leader = { name, password: hashedPassword, email, adress, number }

        Leader.create({leader})

        console.log(leader);

        const result = await leader.save()

        res.status(200).send(result)
        
    } catch (error) {

        res.status(400).send(error);
    }
}

const login = async (req, res) =>{

    const { email, password} = req.body

    const user = await Leader.findOne(email);

    if (!user) return res.status(400).send(`Email Incorrect / Not Found! Please Register First.`);

    const validPassowrd = await bcrypt.compareSync(password)

    if (!validPassowrd) return res.status(400).send('Password incorrect')

    const token = jwt.sign({ _id: user._id }, 'secret');

    res.status(200).json({ status: 'success', token });
    
}


module.exports= {
    signUp, login
}