const UserModel = require('../models/user-model')

const uuid = require('uuid')

const bcrypt = require('bcrypt')

const mailService = require('./mail-service')

class UserService {
    async registration(email,password) {
        const candidate = await userModel.findOne({email})
        if(candidate){
            throw new Error(`${email} уже існує`)
        }
        const hashPassword = await bcrypt.hash(password,3)
        const activationLink = uuid.v4()
        const user = await UserModel.create({email,password: hashPassword, activationLink})
        await mailService.sendActivationEmail(email, activationLink)
    }
} 

module.exports = new UserService 