There are a surprising number of HTTP status codes aside from the two or three you may have run into in the wild. They exist to represent the status of requests that browsers make to load websites, and they're split into five groups.

1XX — Informational Responses
2XX — Success Responses
3XX — Redirection Responses
4XX — Client Error Responses
5XX — Server Error Responses

We'll be highlighting some well-known and a few not-so-well-known codes.

**1XX Codes**
An informational response lets the browser know that the request to load a website or document was received and understood. Codes like these are issued while the request processing continues on the server, and it lets the browser know that it should wait for a final response.

**100 — Continue**
A status code of 100 indicates that (usually the first) part of a request has been received without any problems, and that the rest of the request should now be sent.

101 - Switching Protocols

This code is sent in response to an [`Upgrade`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Upgrade) request header from the client and indicates the protocol the server is switching to.

102 - Processing

This code indicates that the server has received and is processing the request, but no response is available yet.

103 - Early Hints

This status code is primarily intended to be used with the [`Link`](https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Link) header, letting the user agent start preloading resources while the server prepares a response or preconnect  to an origin from which the page will need resources.

**2XX Codes**
A success response lets the browser know that the request was received, understood, and accepted — that's what separates them from the 1XX codes.

**200 — OK**
This is the code that browsers receive when every has gone according to plan.

**201 — Created**
This code indicates that a request was successful and as a result, a resource has been created (for example a new page).

**204 — No Content**
The 204 status code means that the request was received and understood, but that there is no need to send any data back.

**205 — Reset Content**
This code is a request from the server to the client to reset the document from which the original request was sent. For example, if a user fills out a form, and submits it, a status code of 205 means the server is asking the browser to clear the form.

**206 — Partial Content**
This is a response to a request for part of a document. This is used by advanced caching tools, when a browser requests only a small part of a page, and just that section is returned.

207 - Multi Status

Conveys information about multiple resources, for situations where multiple status codes might be appropriate.

208 - Already ReportedUsed inside a `<dav:propstat>` response element to avoid repeatedly enumerating the internal members of multiple bindings to the same collection.

226  - IM Used (HTTP Delta Encoding)
The server has fulfilled a `GET` request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.

**3XX Codes**
These status codes tell the browser that it must take additional action to complete the request. Many of these status codes are used in URL redirection.

**300 — Multiple Choices**
The 300 status code indicates that a page or document has moved. The response will also include a list of new locations so the browser can pick a place to redirect to.

**301 — Moved Permanently**
This tells a browser that the resource it asked for has permanently moved to a new location. The response should also include the location. It also tells the browser which URL to use the next time it wants to fetch it.

**304 — Not Modified**
The 304 status code is sent in response to a request (for a document) that asked for the document only if it was newer than the one the client already had. Normally, when a document is cached, the date it was cached is stored. The next time the document is viewed, the client asks the server if the document has changed. If not, the client just reloads the document from the cache.

**307 — Temporary Redirect**
307 is the status code that is sent when a document is temporarily available at a different URL, which is also returned. There is very little difference between a 302 status code and a 307 status code. 307 was created as another, less ambiguous, version of the 302 status code.

308 - Permanent Redirect

This means that the resource is now permanently located at another URI, specified by the `Location:` HTTP Response header. This has the same semantics as the `301 Moved Permanently` HTTP response code, with the exception that the user agent *must not* change the HTTP method used: if a `POST` was used in the first request, a `POST` must be used in the second request.

**4XX Codes**
This type of status code is intended for situations in which an error seems to have been caused by the browser or user, like the infamous 404 error.

**400 — Bad Request**
A status code of 400 indicates that the server did not understand the request due to bad syntax.

**401 — Unauthorized**
A 401 status code indicates that before a resource can be accessed, the client must be authorised by the server.

**402 — Payment Required**
The 402 status code is not currently in use, being listed as "reserved for future use". It's interesting to think about how this will be used in the future, especially now that Chrome natively blocks some intrusive ads.

**403 — Forbidden**
A 403 status code indicates that the client cannot access the requested resource. That might mean that the wrong username and password were sent in the request, or that the permissions on the server do not allow what was being asked.

**404 — Not Found**
The best known of them all, the 404 status code indicates that the requested resource was not found at the URL given, and the server has no idea how long for.

**408 — Request Timeout**
A 408 status code means that the client did not produce a request quickly enough. A server is set to only wait a certain amount of time for responses from clients, and a 408 status code indicates that time has passed.

**410 — Gone**
A 410 status code is the 404's lesser known cousin. It indicates that a resource has permanently gone (a 404 status code gives no indication if a resource has gone permanently or temporarily), and no new address is known for it.

**415 — Unsupported Media Type**
A 415 status code is returned by a server to indicate that part of the request was in an unsupported format.

416 Range Not Satisfiable
The range specified by the Range header field in the request cannot be fulfilled. It's possible that the range is outside the size of the target URI's data.

417 Expectation Failed
This response code means the expectation indicated by the Expect request header field cannot be met by the server.

418 I'm a teapot
The server refuses the attempt to brew coffee with a teapot.

421 Misdirected Request
The request was directed at a server that is not able to produce a response. This can be sent by a server that is not configured to produce responses for the combination of scheme and authority that are included in the request URI.

422 Unprocessable Content (WebDAV)
The request was well-formed but was unable to be followed due to semantic errors.

423 Locked (WebDAV)
The resource that is being accessed is locked.

424 Failed Dependency (WebDAV)
The request failed due to failure of a previous request.

425 Too Early Experimental
Indicates that the server is unwilling to risk processing a request that might be replayed.

426 Upgrade Required
The server refuses to perform the request using the current protocol but might be willing to do so after the client upgrades to a different protocol. The server sends an Upgrade header in a 426 response to indicate the required protocol(s).

428 Precondition Required
The origin server requires the request to be conditional. This response is intended to prevent the 'lost update' problem, where a client GETs a resource's state, modifies it and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict.

429 Too Many Requests
The user has sent too many requests in a given amount of time ("rate limiting").

431 Request Header Fields Too Large
The server is unwilling to process the request because its header fields are too large. The request may be resubmitted after reducing the size of the request header fields.

451 Unavailable For Legal Reasons
The user agent requested a resource that cannot legally be provided, such as a web page censored by a government.


**5XX Codes**
Simply put, these codes are sent when the server failed to fulfil a request.

**500 - Internal Server Error**
A 500 status code (which developers see more often that they want) indicates that the server encountered something it didn't expect and was unable to complete the request.

**503 — Service Unavailable**
A 503 status code is most often seen on extremely busy servers, and it indicates that the server was unable to complete the request due to a server overload.

**503 Isn't So Bad**
If you ever see one of these errors on your own website, and you don't know what to do, take a look at this list. With this, you'll be able to let us (if we host your website) know what's actually going on when your website looks like it's broken

504 Gateway Timeout
This error response is given when the server is acting as a gateway and cannot get a response in time.

505 HTTP Version Not Supported
The HTTP version used in the request is not supported by the server.

506 Variant Also Negotiates
The server has an internal configuration error: the chosen variant resource is configured to engage in transparent content negotiation itself, and is therefore not a proper end point in the negotiation process.

507 Insufficient Storage (WebDAV)
The method could not be performed on the resource because the server is unable to store the representation needed to successfully complete the request.

508 Loop Detected (WebDAV)
The server detected an infinite loop while processing the request.

510 Not Extended
Further extensions to the request are required for the server to fulfill it.

511 Network Authentication Required
Indicates that the client needs to authenticate to gain network access.
