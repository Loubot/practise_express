
var passportJWT = require("passport-jwt");  
var models = require("../models");  
var cfg = require("./strategyConfig.js"); 
var winston = require('winston') 
var ExtractJwt = passportJWT.ExtractJwt;  
var Strategy = passportJWT.Strategy;  
var params = {  
    secretOrKey: cfg.jwtSecret,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};

module.exports = function( passport ) {  
    var strategy = new Strategy(params, function(payload, done) {
        
        models.User.findOne( {
            where: { id: payload }
        }).then( user => {
            winston.debug( "User in stragey found")
            winston.debug( user )
            if (user) {
                return done(null, {
                    id: user.id
                });
            } else {
                return done(new Error("User not found"), null);
            }
        })
    });
    passport.use(strategy);
    return {
        initialise: function() {
            return passport.initialize();
        },
        authenticate: function() {
            return passport.authenticate("jwt", { session: false } );
        }
    };
};