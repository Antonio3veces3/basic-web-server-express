const {Router} = require('express');
const { usersGET, 
        usersPUT, usersPOST, 
        usersDELETE,
        usersPATCH } = require('../controllers/users.controller');
const router =  Router();

router.get('/', usersGET);

router.put('/:id', usersPUT);

router.post('/', usersPOST)

router.delete('/', usersDELETE);

router.patch('/', usersPATCH);






module.exports = router;