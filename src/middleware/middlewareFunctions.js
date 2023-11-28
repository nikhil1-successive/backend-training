const middleware1 = (req, res, next) => {
    console.log("Middleware1")
    next()
}
const middleware2 = (req, res, next) => {
    console.log("Middleware2")
    next()
}
export { middleware1, middleware2 }
