const middleware1 = async (req, res) => {
    console.log("Middleware1")
    next()
}
const middleware2 = async (req, res) => {
    console.log("Middleware2")
    next()
}
export { middleware1, middleware2 }
