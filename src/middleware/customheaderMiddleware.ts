class MyHeaders extends Headers {
    constructor() {
      super();
      this.append("Content-Type", "images/png");
    }
  }
  
  interface MyRequestOptions extends RequestInit {
    headers: MyHeaders;
  }
  
  class MyRequest extends Request {
    constructor(url: string, options?: MyRequestOptions) {
      super(url, options);
    }
  }
  
  const myHeaders = new MyHeaders();
  
  const myInit: MyRequestOptions = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
  };
  
  const myRequest = new MyRequest("https://expressjs.com/images/express-facebook-share.png", myInit);
  
  const myContentType: string | null = myRequest.headers.get("Content-Type");
  console.log(myContentType);
  
  export default myHeaders;
  