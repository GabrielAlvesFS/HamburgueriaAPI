import { updateUser } from "../../services/users.js";
import { getUser } from "../../services/users.js";
import { logger } from "../../config/logger.js";
import patchUserValidator from "./validators/patchUserValidator.js"
import { hashValue } from "../../utils/bcrypt.js"

export default async (req, res) => {
  try {
    const dataObj = { 
      id: req.params.id,
      name: req.body?.name,
      password: req.body?.password,
      birthDate: req.body?.birthDate,
      phone: req.body?.phone
    }
  
    //Zod Validation
    patchUserValidator.parse(dataObj)
    
    //Verifying if ID exists
    const user = await getUser(dataObj.id)
    if (!user) throw new Error("ID not found!")

    const dataAfterValidated = {
      name: dataObj?.name,
      password: dataObj?.password,
      birthDate: dataObj?.birthDate,
      phone: dataObj?.phone
    }

    //If it exists the password field will be encrypted
    dataAfterValidated.password = await hashValue(dataAfterValidated.password)

    //Updating User
    const data = await updateUser(dataObj.id, dataAfterValidated)
    res.send(data)
  } catch (error) {
    if (error?.message === "ID not found!") return res.status(404).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send(error.issues)
    logger.error(error)
    res.status(500).send({ error: "internal error"})
  }
}