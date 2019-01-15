// check env.
var env = process.env.NODE_ENV || 'development';
console.log("Environment: " + env);

// fetch env. config
var config = require('./config.json');

// fetch the config based on env.
var envConfig = config[env];

// add env. config values to process.env
Object.keys(envConfig).forEach(key => process.env[key] = envConfig[key]);

// replace cypto-created jwt secret 
// provides cryptographic functionality (OpenSSL's hash, HMAC, cipher, decipher, sign and verify functions)
const cryptoSecretKey = require('crypto').randomBytes(256).toString('hex'); 
process.env["JWT_SECRET"] = cryptoSecretKey || process.env["JWT_SECRET"];
console.log("JWT SECRET KEY: " + cryptoSecretKey);
