'use strict'

module.exports = {
    get_token_from_req: function( req ) {
        if ( req.body && req.body.token ) {
            return req.body.token
        } else if ( req.query && req.query.token ) {
            return req.query.token
        } else {
            return null;
        }
    }
}