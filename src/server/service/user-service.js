const userModel = require('../models/user-model')

const uuid = require('uuid')

const bcrypt = require('bcrypt')

const mailService = require('./mail-service')
const tokenService = require('./token-service')
const UserDto = require('../dtos/user-dto')
const ApiError = require('../exceptions/api-errors')

class UserService {
    async registration(email,password) {
        const candidate = await userModel.findOne({email})
        if(candidate){
            throw  ApiError.BadRequest(`${email} уже існує`)
        }
        const hashPassword = await bcrypt.hash(password,3)
        const activationLink = uuid.v4()
        const user = await userModel.create({email,password: hashPassword, activationLink})
        await mailService.sendActivationEmail(email, `${process.env.API_URL}/api/activate/${activationLink}`)

        const userDto = new UserDto(user) // id, mail, isActivated
        const tokens = tokenService.generatorTokens({...userDto})
        await tokenService.saveToken(userDto.id, tokens.refreshToken)
        return { ...tokens, user: userDto }
    }

    async activate(activationLink){
        const user = await userModel.findOne({activationLink})
        if(!user){
            throw ApiError.BadRequest('Не коректна силка активації')
        }
        user.isActivated = true;
        await user.save();
    }
} 

module.exports = new UserService 