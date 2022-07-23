const { Router } = require('express');
const { check } = require('express-validator');

const { login } = require('../controllers/auth.controller');
// const { ValidateInputs } = require('../middlewares/validate-inputs');
// const { validateJWT } = require('../middlewares/validate-jwt');
const {
    ValidateInputs,
} = require('../middlewares');
const router = Router();

router.post('/login',[
    check('mail', 'The mail is required').isEmail(),
    check('password', 'The password is required').notEmpty(),
    ValidateInputs
], login);

module.exports = router;