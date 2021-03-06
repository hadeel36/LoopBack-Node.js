'use strict';

module.exports = {
  Mongodb: {
    connector: "mongodb",
    hostname: process.env.DB_HOST || "localhost",
    port: process.env.DB_PORT || 32769,
    user: process.env.DB_USER || "",
    password: process.env.DB_PASSWORD || "",
    database: process.env.DB_NAME || "",
  }
};