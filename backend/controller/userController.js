const mongoose = require('mongoose');
const User = require('../models/User');
const { generateAccessToken, authenticateToken } = require('../utils/jwt');

const register = async(req,res,next) => {
    const { email, username, password, cpassword } = req.body;
    const isEmailExist = await User.find({
        email: email
    });

    if(isEmailExist !== null) {
        return res.status(400).json({
            msg: 'email already exist',
            data: ''
        });
    }

    const isUsernameExist = await User.find({
        username: username
    });

    if(isUsernameExist !== null) {
        return res.status(400).json({
            msg : 'username already exists',
            data: ''
        });
    }

    if(password !== cpassword) {
        return res.status(400).json({
            msg: 'both password dont match',
            data: ''
        })
    }

    const userInserted = new User({
        email: email,
        username: username,
        password: password
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

    if(user.password !== password){
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