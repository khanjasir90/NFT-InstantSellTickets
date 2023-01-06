const mongoose = require('mongoose');
const User = require('../models/User');
const bcrypt = require("bcrypt")
const { generateAccessToken, authenticateToken } = require('../utils/jwt');

const register = async(req,res,next) => {
    const { email, username, password, cpassword } = req.body;
    const isEmailExist = await User.findOne({
        email: email
    });
    
    if(isEmailExist) {
        return res.status(400).json({
            msg: 'email already exist',
            data: ''
        });
    }

    const isUsernameExist = await User.findOne({
        username: username
    });

    if(isUsernameExist) {
        return res.status(400).json({
            msg : 'username already exists',
            data: ''
        });
    }
    console.log(password)
    console.log(cpassword)
    if(password != cpassword) {
        return res.status(400).json({
            msg: 'both password dont match',
            data: req.body
        })
    }

    hashed_password = await bcrypt.hash(password, 10);

    const userInserted = new User({
        email: email,
        username: username,
        password: hashed_password
    })

    try {
        await userInserted.save();
        return res.status(200).json({
            msg: 'user successfully registered',
            data: userInserted
        })
    } catch(error) {
        return res.status(500).json({
            msg: 'error occurred while inserting record',
            data: ''
        })
    }


}

const login = async(req,res,next) => {
    const {username, password} = req.body;
    const token = generateAccessToken(req.body);

    const user = await User.findOne({
        username: username
    })

    console.log(user);

    if(user === null) {
        res.status(400).json({
            msg: 'wrong username or password',
            data: ''
        })
    }

    hashed_password = await bcrypt.compare(password, user.password)

    if(!hashed_password){
        return res.status(400).json({
            msg: 'wrong username or password',
            data: ''
        })
    }

    return res.status(200).json({
        msg: 'user login successfully',
        token: token,
        data: user
    });

}

const getUser = (req,res,next) => {
    console.log('GetUser');
}

module.exports = {
    register,
    login,
    getUser
};