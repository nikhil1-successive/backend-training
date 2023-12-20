class MyHeaders extends Headers {
  constructor() {
    super();
    this.append("Content-Type", "image/png"); // Corrected Content-Type
  }
}

interface MyRequestOptions extends RequestInit {
  headers?: MyHeaders;
}

class MyRequest extends Request {
  constructor(url: string, options?: MyRequestOptions) {
    // Ensure options.headers is properly initialized
    options = options || {};
    options.headers = options.headers || new MyHeaders();

    super(url, options);
  }
}

const myInit: MyRequestOptions = {
  method: "GET",
  mode: "cors",
  cache: "default",
};

const myRequest = new MyRequest("https://expressjs.com/images/express-facebook-share.png", myInit);

const myContentType: string | null = myRequest.headers.get("Content-Type");
console.log(myContentType);

export default myRequest.headers;
