'use strict'

var models = require('../models');
var strategy = require('../config/strategy')
var winston = require('winston')

module.exports.controller = function( app, jwt ) {
    
    console.log('user');

    app.get('/api/user', function( req, res ) {
        winston.debug( 'Authorisation' )
        var token = req.get( 'authorization')
        winston.debug( token )
        jwt.verify( token, strategy.strategy_options().secretOrKey, function(err, decoded) {
            if( err ) {
                winston.debug( err )
            } else {
                winston.debug( decoded )
                models.User.findOne({
                    where: { id: decoded.id }
                }).then( user => {
                    res.json( user )
                })
            }
          // decoded undefined
        });


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