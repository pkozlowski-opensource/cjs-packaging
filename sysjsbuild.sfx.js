#!/usr/bin/env node

var Builder = require('systemjs-builder');

var builder = new Builder('./');

builder
    .buildStatic('angular2.js', 'dist/systemjs/sfx/angular2.js', { format: 'cjs' })
    .then(function() {
        console.log('SystemJS SFX build complete for "angular2.js"');
    }).catch(function(err) {
        console.log(err);
    });

builder
    .buildStatic('http.js - angular2.js', 'dist/systemjs/sfx/http.js', { format: 'cjs' })
    .then(function() {
        console.log('SystemJS SFX build complete for "http.js"');
    })
    .catch(function(err) {
        console.log(err);
    });