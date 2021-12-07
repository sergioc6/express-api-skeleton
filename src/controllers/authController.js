const passport = require('passport');
const jwt = require("jsonwebtoken");

exports.login = (req, res, next) => {
    passport.authenticate('login',
        async(err, user, info) => {
            try {
                if(err || !user) {
                    return next(err);
                }
                req.login(
                    user,
                    { session: false },
                    async (error) => {
                        if (error) return next(error);

                        const token = jwt.sign({user}, process.env.JWT_SECRET);
                        return res.json({token});
                    }
                )
            } catch (error) {
                return next(error);
            }
        }
    )(req, res, next)
}

exports.logout = (req, res) => {
    res.send('TODO: logout')
}