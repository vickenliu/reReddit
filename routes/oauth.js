var passport= require('passport')
var Strategy = require('passport-facebook').Strategy;

export default function(passport,db){
  passport.use(new Strategy({
      clientID: process.env.FB_APPID,
      clientSecret: process.env.FB_SECRET,
      callbackURL: "http://localhost:3000/auth/facebook/callback",
      profileFields: ['id', 'displayName', 'photos', 'email']
    },
    function(accessToken, refreshToken, profile, cb) {
        var info=profile._json
        var user={id:info.id.toString(),
                  name:info.name,
                  email:info.email}
        db.findOrCreate(user)
  	return cb(null,profile._json)

    }
  ));
  passport.serializeUser(function(user, cb) {
    cb(null, user);
  });

  passport.deserializeUser(function(obj, cb) {
    cb(null, obj);
  });
}
