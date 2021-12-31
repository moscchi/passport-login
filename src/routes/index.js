const express = require('express');
const passport = require('passport')
const router = express.Router();
const { getRegister, postRegister, getFailregister, getLogin, postLogin, getFaillogin, getLogout} = require('../controller/index')


router.get('/', (req, res) => {res.render('login')})
// REGISTRO
router.get("/registro", getRegister);
router.post("/registro", passport.authenticate('signup', { failureRedirect: '/failregister'}), postRegister);
router.get("/failregister", getFailregister);

// LOGIN
router.get('/login', getLogin);
router.post('/login', passport.authenticate('signin', { failureRedirect: '/faillogin'}), postLogin);
router.get('/faillogin', getFaillogin);

// LOGOUT
router.get('/logout', getLogout);

module.exports = router;