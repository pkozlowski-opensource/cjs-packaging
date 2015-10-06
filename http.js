var isPresent = require('src/angular2/core/facade/lang.js').isPresent;

module.exports = {
    Http: function() {
        //I'm http using facade
        console.log('Calling http');
        return isPresent(true);
    }
};
