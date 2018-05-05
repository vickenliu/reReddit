
class AuthCtrl {
    isLoggedIn(req, res, next) {
        if (req.session.passport) {
            req.user = req.session.passport.user;
            next();
        } else {
            res.status(401).json({
                error: 'Authentication failed, you need to login to do so',
                status: 401
            });
        }
    }
}

export default new AuthCtrl();