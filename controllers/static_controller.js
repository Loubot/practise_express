'use strict'

module.exports.controller = function( app, jwt, strategy ){
    app.get('/', function( req, res ) {
        res.render('index');
    })
}