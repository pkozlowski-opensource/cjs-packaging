var isPresent = require('src/angular2/core/facade/lang.js').isPresent;

module.exports = {
    bootstrap: function() {
        console.log('Calling bootstrap');
        //I'm bootstrap using facade
        return isPresent(true);
    },
    sthPublic: 'FooBar'
};