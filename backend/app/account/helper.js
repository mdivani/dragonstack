const SHA256 = require("crypto-js/sha256");
const {APP_SECRET} = require("../../secrets");

const hash = (pass) => {
    return SHA256(`${pass}${APP_SECRET}`).toString();
}

module.exports = { hash };