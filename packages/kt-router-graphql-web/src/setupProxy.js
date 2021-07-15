/* eslint-disable @typescript-eslint/explicit-function-return-type */
/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
// tslint:disable
const { set } = require('lodash');
// eslint-disable-next-line import/no-extraneous-dependencies
const { createProxyMiddleware } = require('http-proxy-middleware');

require('dotenv').config();

const BACKEND_URL = process.env.BACKEND_URL || 'http://localhost:8081/';
const API_URL = process.env.API_URL || '/api';

const rewriteRules = {};

set(rewriteRules, `^${API_URL}/graphql`, '/1/graphql');
set(rewriteRules, `^${API_URL}`, '/1/');

module.exports = (app) => {
  app.use(
    createProxyMiddleware(API_URL, {
      target: BACKEND_URL,
      pathRewrite: rewriteRules,
      changeOrigin: true,
      ws: true
    })
  );
  console.info(`Starting Dev Env proxy from ${API_URL} --> ${BACKEND_URL}`);
};
