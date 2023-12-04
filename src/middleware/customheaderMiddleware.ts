const myHeaders: HeadersInit = new Headers();
myHeaders.append("Content-Type", "image/png"); 

const myInit: RequestInit = {
    method: "GET",
    headers: myHeaders,
    mode: "cors",
    cache: "default",
};

const myRequest: Request = new Request("https://expressjs.com/images/express-facebook-share.png", myInit);
const myContentType: string | null = myRequest.headers.get("Content-Type");
console.log(myContentType);

export default myHeaders;
