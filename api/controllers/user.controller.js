const {User} = require('../models/user.model')

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken');


const signUp = async (req, res)=> {
    try {
        const {name, email, adress, number, password, role} = req.body
        
        const emailExist = await User.findOne({ email: req.body.email });

        if(emailExist) return res.status(200).send("Email Already Exist!");
        
        var salt = bcrypt.genSaltSync(10);

        const hashedPassword = bcrypt.hashSync(password,salt);

        // console.log('hashedPassword',hashedPassword,bcrypt.compareSync(password,hashedPassword))
        const user = await User.create( { name, password: hashedPassword, email, adress, number,
                role: role === 'admin' ? {
                name: role,
                status: false
            } : {
                name: role
            }})
        
        const result = await user.save()

        res.status(200).send(result)
        
    } catch (error) {

        res.status(400).send(error);
    }
}

const login = async (req, res) =>{

    const { email, password } = req.body
    
    const user = await User.findOne({email});
    
    if (!user) return res.status(400).send(`Email Incorrect / Not Found! Please Register First.`);
    
    const validPassowrd = bcrypt.compare(password, user.password)
    
    if (!validPassowrd) return res.status(400).send('Password incorrect')
    
    const token = jwt.sign({ _id: user._id, role: user.role }, 'secret');

    res.status(200).json({ status: 'success', token });
    
}


module.exports= {
    signUp, login
}