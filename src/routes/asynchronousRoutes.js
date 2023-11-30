const asyncHandler = (fun) => (req, res, next) => {
  Promise.resolve(fun(req, res, next))
    .catch(next)
}

const asyncFunc = (text) => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(text), 1000)
  })
}
export { asyncHandler, asyncFunc }

