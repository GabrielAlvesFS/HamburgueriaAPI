import { logger } from "../config/logger.js"

export class NotFoundError extends Error {
  constructor(message, path) {
    super(message)
    this.name = "notFoundError"
    this.code = "notFoundError"
    this.path = path
  }
}

export class AssignmentError extends Error {
  constructor(message, path) {
    super(message)
    this.name = "assignmentError"
    this.code = "assignmentError"
    this.path = path
  }
}

const notFoundError = (err, res) => {
  return res.status(404).send(
    {
      error: [{
        code: err.code,
        message: err.message,
        path: [ err.path ]
      }]
  })
}

const assignmentError = (err, res) => {
  return res.status(403).send(
    {
      error: [{
        code: err.code,
        message: err.message,
        path: [ err.path ]
      }]
  })
}

const zodError = (err, res) => {
  return res.status(400).send({error: err.issues})
}

const errorFunctions = { 
  notFoundError,
  assignmentError,
  ZodError: zodError
}

export const errorHandler = async (err, req, res, next) => {
  try {
    
    const errorName = err.name || err.message
    return errorFunctions[errorName](err, res)
    
  } catch (error) {
    res.status(500).send({
      error: [{
        code: "internalServerError",
        message: "Internal Server Error",
        path: []
      }]
    })
    
    logger.error(error)
    next()

  }
}