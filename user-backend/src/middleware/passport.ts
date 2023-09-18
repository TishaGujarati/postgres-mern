const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const users = require("../models/user");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
    },
    async (email: string, done: any) => {
      try {
        const user = await users.findOne({ where: { email: email } });

        if (!user) {
          return done(null, false, { message: "Incorrect email" });
        }
        return done(null, user);
      } catch (err) {
        return done(err);
      }
    }
  )
);

passport.serializeUser((user: any, done: any) => {
  done(null, user.id);
});

passport.deserializeUser((id: number, done: any) => {
  users
    .findByPk(id)
    .then((user: any) => {
      done(null, user);
    })
    .catch((err: any) => {
      done(err);
    });
});

export default passport;