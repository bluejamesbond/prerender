#!/usr/bin/env node
var prerender = require('./lib');

var server = prerender({followRedirects: true, chromeLocation: process.env.GOOGLE_CHROME_BIN});

server.use(prerender.sendPrerenderHeader());
// server.use(prerender.blockResources());
server.use(prerender.removeScriptTags());
server.use(prerender.httpHeaders());

server.start();
