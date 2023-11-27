export default function ehandle(error, req, res, next) {
    console.log(error)
    res
      .status(error.status)
      .json({ status: error.status, message: error.message })
  }