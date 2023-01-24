import jwt from "jsonwebtoken";
import { listUsers } from "../../services/users.js";
import { listManagers } from "../../services/manager.js";
import { compareHash } from "../../utils/bcrypt.js";
import postAuthorizationValidator from "./validators/postAuthorizationValidator.js";
import { logger } from "../../config/logger.js";

export default async (req, res) => {
  try {
    let user;

    postAuthorizationValidator.parse(req.body)

    if(req.body.role == 'customer') {
      user = await listUsers({email: req.body.email})
    }

    else if(req.body.role == 'manager') {
      user = await listManagers({email: req.body.email})
    }

    if (!user.length) throw new Error('User not found!')
    
    const checkPassword = await compareHash(req.body.password, user[0].password)

    if (!checkPassword) throw new Error('Wrong password or email!')
    

    const payload = {
      id: user[0]._id,
      name: user[0].name,  
      email: user[0].email,
      phone: user[0]?.phone,
      roles: req.body.role,
      exp: Math.floor(Date.now() / 1000) + (7*24*60*60)
    }

    const secret = process.env.JWT_SECRET

    const token = jwt.sign(payload, secret)

    // retorna  obj token e payload
    res.status(200).send({
      status: "Autenticação funciona!",
      token, 
      payload
    })
    
  } catch (error) {
    if (error.message === 'User not found!') return res.status(404).send({error: error.message})
    else if (error.message === 'Wrong password or email!') return res.status(403).send({error: error.message})
    else if (error.name === "ZodError") return res.status(400).send(error.issues)

    logger.error(error)
    res.status(500).send({ error: "internal error"})
  }
}