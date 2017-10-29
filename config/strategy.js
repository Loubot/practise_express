'use strict'
var passportJWT = require("passport-jwt");
var JwtStrategy = passportJWT.Strategy;
var ExtractJwt = passportJWT.ExtractJwt;

module.exports = {
    strategy_options: function() {
        var jwtOptions = {}
        jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
        jwtOptions.secretOrKey = '34543534543';

        return jwtOptions;
    },


    passport_strategy: function() {
       var jwtOptions = {}
       jwtOptions.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
       jwtOptions.secretOrKey = '34543534543';

       var strategy = new JwtStrategy(jwtOptions, function(jwt_payload, next) {
         console.log('payload received', jwt_payload);
         // usually this would be a database call:
         var user = users[_.findIndex(users, {id: jwt_payload.id})];
         if (user) {
           next(null, user);
         } else {
           next(null, false);
         }
       });

       return strategy;
    }
    

    
}