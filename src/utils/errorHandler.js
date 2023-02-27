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

export class InvalidAttributionError extends Error {
  constructor(message, path) {
    super(message)
    this.name = "invalidAttributionError"
    this.code = "invalidAttributionError"
    this.path = path
  }
}

export class UnauthorizedError extends Error {
  constructor(message, path) {
    super(message)
    this.name = "unauthorizedError"
    this.code = "unauthorizedError"
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

const invalidAttributionError = (err, res) => {
  return res.status(403).send(
    {
      error: [{
        code: err.code,
        message: err.message,
        path: [ err.path ]
      }]
  })
}

const unauthorizedError = (err, res) => {
  return res.status(401).send(
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
  invalidAttributionError,
  unauthorizedError,
  ZodError: zodError
}

export const errorHandler = async (err, req, res, next) => {
  try {
    logger.error(err)
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