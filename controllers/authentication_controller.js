'use strict'

var models = require( '../models' )
var strategy = require( '../config/strategy')
var winston = require('winston')
var strategy = require('../config/strategy') 
// var helper = require('../helpers/controllers/authentication_controller_helper')

module.exports.controller = function( app,  jwt ){
    console.log( 'Authentication controller' )
    

    app.post( '/login', function( req, res ) {
        winston.debug( "Authentication query" )
        winston.debug( req.body )

        models.User.findOne({
            where: { email: req.body.email } 
        }).then( user => {
            if ( !user ) {
                res.status( 401 ).json( { success: false, message: "Could not find user" } )
            } else if ( user ) {
                // console.log( user )
                
                var payload = { id: user.id }
                jwt.sign({ id: user.id }, strategy.strategy_options().secretOrKey , function(err, token) {
                  winston.debug( 'token created ' )
                  // winston.debug( res )
                  
                  winston.debug( token )
                  res.json( { success: true, token: token } )
                });
                // var token = jwt.sign( payload, strategy.strategy_options().secretOrKey );

            }
            
        })
    })
}