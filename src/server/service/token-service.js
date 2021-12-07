const jwt = require('jsonwebtoken')
const ACCESS = process.env.JWT_ACCESS_SECRET
const REFRESH = process.env.JWT_REFRESH_SECRET
const tokenModel = require('../models/token-model')
class TokenService {
    generatorTokens(payload){
        const accessToken = jwt.sign(payload, ACCESS, {expiresIn:'30m'})
        const refreshToken = jwt.sign(payload, REFRESH, {expiresIn:'30d'})
        return{
            accessToken,
            refreshToken
        }
    }
    async saveToken(userId, refreshToken){
        const tokenData = await tokenModel.findOne({user: userId})
    }

}

module.exports = new TokenService 