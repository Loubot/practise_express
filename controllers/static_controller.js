'use strict'

module.exports.controller = function( app, passport, passportJWT, ExtractJwt, JwtStrategy, jwt ){
    app.get('/', function( req, res ) {
        res.render('index');
    })
}