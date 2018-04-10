import postService from './post';
import commentService from './comment';
import userService from './user';
import passport from 'passport';
const Strategy = require('passport-facebook').Strategy;

export default class AppService {
    static getInitial(cb) {
        var response={}
          postService.getAll().then((posts) => {
          response['posts']=posts
          commentService.getAll().then((comments) => {
                response.comments=comments;
                userService.getAll().then((users) => {
                    response.users = users;
                    cb(response);
                })
    
              })
    
        })
    
    }
    static applyPassportStrategy() {
        const strategyConfig = {
            clientID: process.env.FB_APPID,
            clientSecret: process.env.FB_SECRET,
            callbackURL: `${process.env.URL}/people/auth/facebook/callback`,
            profileFields: ['id', 'displayName', 'photos', 'email']
        };

        passport.use(new Strategy(strategyConfig, (accessToken, refreshToken, profile, cb) => {
              const info = profile._json
              const user = {
                            id: info.id.toString(),
                            name: info.name,
                            email: info.email
                           };

              userService.findOrCreate(user);
            return cb(null, profile._json);
      
        }));
        passport.serializeUser((user, cb) => {
          cb(null, user);
        });
      
        passport.deserializeUser((obj, cb) => {
          cb(null, obj);
        });
    }
}

