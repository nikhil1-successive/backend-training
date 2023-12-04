"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MyHeaders extends Headers {
    constructor() {
        super();
        this.append("Content-Type", "images/png");
    }
}
class MyRequest extends Request {
    constructor(url, options) {
        super(url, options);
    }
}
const myHeaders = new MyHeaders();
const myInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
};
const myRequest = new MyRequest("https://expressjs.com/images/express-facebook-share.png", myInit);
const myContentType = myRequest.headers.get("Content-Type");
console.log(myContentType);
exports.default = myHeaders;
