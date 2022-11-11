import { logger } from "../config/logger.js"

const zodError = (err, res) => {
  return res.status(400).send({error: err.issues})
}

const notFound = (err, res) => {
  return res.status(404).send({error: err.message})
}

const errorFunctions = { 
  notFound,
  ZodError: zodError
}

export default async (err, req, res, next) => {
  try {
    
    const errorName = err.message || err.name
    errorFunctions[errorName](err, res)
    res.status(500).send({error: "Internal error"})
    
    res.send(err)
    throw err

  } catch (error) {

    logger.error(error)
    next()

  }
}