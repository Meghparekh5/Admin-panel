module.exports.checkRole = (...roles) => {

    return (req, res, next) => {

        if (!req.isAuthenticated()) {
            req.flash("error", "Please login first");
            return res.redirect("/login");
        }

        if (!req.user) {
            req.flash("error", "Please login first");
            return res.redirect("/login");
        }

        if (!roles.includes(req.user.role)) {
            req.flash("error", "Access Denied");
            return res.redirect("/login");
        }

        next();

    };

};