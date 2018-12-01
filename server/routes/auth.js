const router = require('express').Router();
const passport = require('passport');

// auth with google+
router.get('/google', passport.authenticate('google', {
  scope: ['profile']
}));

// callback route for google to redirect to
router.get('/google/redirect', passport.authenticate('google'), (req, res) => {
  // res.send('you reached the redirect URI');

  const username = req.user.profile.displayName;
  const img = req.user.profile.photos[0].value;

  res.redirect(`http://localhost:8082/#/board?userName=${username}&img=${img}`);
});

module.exports = router;
