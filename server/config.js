'use strict';

module.exports = {
  hostname: process.env.hostname || "localhost",
  port: process.env.port || 3000,
  env :process.env.NODE_ENV || "development"
};