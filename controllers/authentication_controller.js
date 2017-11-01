'use strict'

var models = require( '../models' )
var strategy = require( '../config/strategy')
// var helper = require('../helpers/controllers/authentication_controller_helper')

module.exports.controller = function( app, passport, passportJWT, ExtractJwt, JwtStrategy, jwt ){
    console.log( 'Authentication controller' )

    app.post( '/login', function( req, res ) {
        console.log( req.query )
        models.User.findOne({
            where: { email: req.query.email } 
        }).then( user => {
            if ( !user ) {
                res.status( 401 ).json( { success: false, message: "Could not find user" } )
            } else if ( user ) {
                // console.log( user )
                var payload = { id: user.id }
                var token = jwt.sign( payload, strategy.strategy_options().secretOrKey );
                res.json( { success: true, token: token, data: payload } )
            }
            
        })
    })
}