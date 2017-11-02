'use strict'

var models = require('../models');
var winston = require('winston')
// var bla = require('../config/strategy')()

module.exports.controller = function( app, jwt, strategy ) {
    
    console.log('user');

    
    app.get('/api/user', strategy.authenticate(), function( req, res ) {


        winston.debug( 'Authorisation' )
        winston.debug( req.user )
        res.json(req.user)


        // var decoded = jwt.decode( req.get( 'authorization'), {complete: true} )
        // winston.debug( decoded )
        

        
    

    })
    
    // app.get('/user', function( req, res ) {
    //     models.User.findAll().then( function( users ) {
    //         console.log( JSON.stringify( users ) );
    //         res.send( users );
    //     })
        
    // })
}