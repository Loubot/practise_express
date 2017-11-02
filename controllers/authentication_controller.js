'use strict'

var models = require( '../models' )
var winston = require('winston') 
var config = require("../config/strategyConfig")
// var helper = require('../helpers/controllers/authentication_controller_helper')

module.exports.controller = function( app,  jwt ){
    console.log( 'Authentication controller' )
    

    app.post( '/login', function( req, res ) {
        winston.debug( "Authentication query" )
        // winston.debug( req.body )

        models.User.findOne({
            where: { email: req.body.email } 
        }).then( user => {
            if ( !user ) {
                res.status( 401 ).json( { success: false, message: "Could not find user" } )
            } else if ( user ) {
                // console.log( user )
                var payload = user.id

                var token = jwt.sign( payload, config.secretOrKey )
                res.json( token )
                
                // var token = jwt.sign( payload, strategy.strategy_options().secretOrKey );

            }
            
        })
    })
}