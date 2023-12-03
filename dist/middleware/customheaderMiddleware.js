"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const myHeaders = new Headers();
myHeaders.append("Content-Type", "images/png");
const myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
};
const myRequest = new Request("https://expressjs.com/images/express-facebook-share.png", myInit);
const myContentType = myRequest.headers.get("Content-Type");
console.log(myContentType);
exports.default = myHeaders;
