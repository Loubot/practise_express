'use strict'

var passport = require("passport")
var passportJWT = require( "passport-jwt" )
var ExtractJwt  = passportJWT.ExtractJwt
var Strategy = passportJWT.Strategy
var models = require('../models')
var config = require("./strategyConfig")



var params = {  
    secretOrKey: config.secretOrKey,
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken()
};


module.exports = function() {
    var strategy = new Strategy( params, function( payload, done ) {
        var user = models.User.findOne( {
            where: { id: payload.id }
        }).then( user => {
            if (user) {
                return done(null, {
                    id: user.id
                });
            } else {
                return done(new Error("User not found"), null);
            }
        })
    })

    passport.use( strategy )
    return {
        initialize: function() {
            return passport.initialize()
        },
        authenticate: function() {
            return passport.authenticate("jwt", { session: false } )
        }
    }
}