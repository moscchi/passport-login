//register
const getRegister = (req, res, next) => {
    try {
        res.render('registro');
    } catch (error) {
        console.log(error);
        next(error);
    }
}

const postRegister = (req, res, next) => {
    try {
        console.log(req);
        let user = req.user;
        res.render('pagina', { user })
    } catch (error) {
        console.log(error);
        next(error)
    }
}

const getFailregister = (req, res) => {
    console.log('error en registro');
    res.render('failregister')
}

//Login
const getLogin = (req, res, next) => {
        try {
            if(req.isAuthenticated()){
                console.log(req);
                let user = req.user;
                console.log('user logueado');
                res.render('pagina', {user})
            } else {
                console.log('usuario no logueado');
                res.render('login');
            }
        } catch (error) {
            console.log(error);
            next(error)
        }
}

const postLogin = (req, res, next) => {
    try {
        console.log('el req', req);
            let username = req.body.username;
            res.render('pagina', { username });
    } catch (error) {
        next(error)
    }
}

const getFaillogin = (req, res) => {
    console.log('login fail');
    res.render('faillogin', {});
}

const getLogout = (req, res) => {
    req.logout();
    res.render('login');
}

module.exports = { getRegister, postRegister, getFailregister, getLogin, postLogin, getFaillogin, getLogout}
