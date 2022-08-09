const { request, response } = require('express');
const { ResultWithContext } = require('express-validator/src/chain');
const { prisma } = require('../database/db');

const isAdmin = async (req = request, res = response, next) => {

    const user = await prisma['usuario'].findUnique({where: {user_id: req.user_id}})

    if(!user.admin){
        
        return res.status(401).json({ 
            error: "YOU SHALL NOT PASS!" 
        });
    };
    
    next();
}

module.exports = {
    isAdmin
};