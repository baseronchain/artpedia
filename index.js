const axios = require('axios');
const fs = require('fs');
const path = require('path');
const { HttpsProxyAgent } = require('https-proxy-agent');

const colors = {
    green: '\x1b[92m', yellow: '\x1b[93m', red: '\x1b[91m',
    cyan: '\x1b[96m', white: '\x1b[97m', bold: '\x1b[1m', reset: '\x1b[0m'
};
