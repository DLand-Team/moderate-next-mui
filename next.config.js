const path = require('path');

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  alias: {
    "@": path.resolve(__dirname, "src"),
  }
};
