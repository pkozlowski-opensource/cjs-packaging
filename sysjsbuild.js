#!/usr/bin/env node

var Builder = require('systemjs-builder');

var builder = new Builder('./');

builder
    .bundle('angular2.js', 'dist/systemjs/register/angular2.js')
    .then(function() {
        console.log('SystemJS build complete for "angular2.js"');
    }).catch(function(err) {
        console.log(err);
    });

builder
    .bundle('http.js - angular2.js', 'dist/systemjs/register/http.js')
    .then(function() {
        console.log('SystemJS build complete for "http.js"');
    })
    .catch(function(err) {
        console.log(err);
    });