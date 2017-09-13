'use strict';

var url = require('url');

var Default = require('./DefaultService');

module.exports.getLarge = function getLarge (req, res, next) {
  Default.getLarge(req.swagger.params, res, next);
};

module.exports.getMedium = function getMedium (req, res, next) {
  Default.getMedium(req.swagger.params, res, next);
};

module.exports.getSmall = function getSmall (req, res, next) {
  Default.getSmall(req.swagger.params, res, next);
};
