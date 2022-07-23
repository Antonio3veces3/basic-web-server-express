const verifyInputs = require('../middlewares/validate-inputs');
const verifyJWT = require('../middlewares/validate-jwt');
const verifyRole = require('../middlewares/validate-role');

module.exports= {
    ...verifyInputs,
    ...verifyJWT,
    ...verifyRole
}

