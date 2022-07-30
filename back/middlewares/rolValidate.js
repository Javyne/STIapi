const { request, response } = require('express');


const isAdmin = (req = request, res = response, next) => {
    
    if(!req.admin){
        return res.status(401).json({ 
            error: "YOU SHALL NOT PASS!" 
        });
    };
    
    next();
}

module.exports = {
    isAdmin
};