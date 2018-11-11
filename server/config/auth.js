const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const KEYS = require('./keys.js');

module.exports = (passport) => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(new GoogleStrategy({
      clientID: KEYS.google.clientID,
      clientSecret: KEYS.google.clientSecret,
      callbackURL: '/auth/google/redirect'
    }, (token, refreshToken, profile, done) => {
      return done(null, {
        profile: profile,
        token: token
    });
  }));
};
