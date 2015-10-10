var isPresent = require('./src/angular2/core/facade/lang.js').isPresent;
var sthPublic = require('angular2/angular2').sthPublic;

module.exports = {
    Http: function() {
        //I'm http using facade
        console.log('Calling http with ' + sthPublic);
        return isPresent(true);
    }
};
