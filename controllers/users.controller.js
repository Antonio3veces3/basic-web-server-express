const { response, request } = require('express');

const usersGET =  (req = request, res = response) => {
    const {name = 'null', age='null',city='null',country='null', token_key=''} = req.query;
    res.json({
        ok: true,
        msg: 'GET API controller',
        name,
        age,
        city,
        country,
        token_key
    })
    res.end();
};
const usersPUT =  (req, res = response) => {
    const {id} = req.params;
    res.status(200).json({
        ok: true,
        msg: 'PUT API controller',
        id
    })
    res.end();
};
const usersPOST =  (req, res = response) => {
    const body = req.body;
    res.json({
        ok: true,
        msg: 'POST API controller',
        body
    })
    res.end();
};
const usersDELETE =  (req, res = response) => {
    res.json({
        ok: true,
        msg: 'DELETE API controller'
    })
    res.end();
};
const usersPATCH =  (req, res = response) => {
    res.json({
        ok: true,
        msg: 'PATCH API controller'
    })
    res.end();
};

module.exports = {
    usersGET,
    usersDELETE,
    usersPATCH,
    usersPOST,
    usersPUT
}