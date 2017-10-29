'use strict'

module.exports.controller = function( app, jwt ){
    app.get('/', function( req, res ) {
        res.render('index', { title: 'blab'});
    })
}