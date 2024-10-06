function requestErrorHandler(controller) {
  return async function(req,res,next) {
    try {
      return await controller()
    } catch(err) {
      next(err)
    }
  }
}

export {requestErrorHandler}