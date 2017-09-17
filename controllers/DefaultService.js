'use strict';
var fs = require('fs');
var jsyaml = require('js-yaml');
var spec = fs.readFileSync('./api/swagger.yaml', 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);
var async = require('async');

var $RefParser = require('json-schema-ref-parser');
var data;
exports.getLarge = function(args, res, next) {
  /**
   * Returns a json file.
   *
   * returns Object
   **/
   $RefParser.dereference(swaggerDoc)
     .then(function(schema) {
       data = schema.definitions.large;
       var examples = {};

       examples['application/json'] = "data";

       if (Object.keys(examples).length > 0) {
       res.writeHeader(200, {'Content-Type': 'application/json'});
       res.end(JSON.stringify(data || {}, null, 2));
       } else {
         res.writeHeader(404, {'Content-Type': 'application/json'});
         res.end();
         }
     })
     .catch(function(err) {
       console.error(err);
     });
}

exports.getMedium = function(args, res, next) {
  /**
   * Returns a json file.
   *
   * returns Object
   **/
   $RefParser.dereference(swaggerDoc)
     .then(function(schema) {
       data = schema.definitions.medium;
       var examples = {};
       examples['application/json'] = "{}";
       if (Object.keys(examples).length > 0) {
         res.setHeader('Content-Type', 'application/json');
         res.end(JSON.stringify(data || {}, null, 2));
       } else {
         res.end();
       }
     })
     .catch(function(err) {
       console.error(err);
     });


}

exports.getSmall = function(args, res, next) {
  /**
   * Returns a json file.
   *
   * returns Object
   **/
   $RefParser.dereference(swaggerDoc)
     .then(function(schema) {
       data = schema.definitions.small;
       var examples = {};
       examples['application/json'] = "{}";
       if (Object.keys(examples).length > 0) {
         res.setHeader('Content-Type', 'application/json');
         res.end(JSON.stringify(data || {}, null, 2));
       } else {
         res.end();
       }
     })
     .catch(function(err) {
       console.error(err);
     });

}
