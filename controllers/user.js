'use strict'

var models = require('../models')

module.exports.controller = function( app ) {
    console.log('user');
    
    app.get('/user', function( req, res ) {
        models.User.findAll().then( function( users ) {
            console.log( JSON.stringify( users ) );
            res.send( users );
        })
        
    });
}