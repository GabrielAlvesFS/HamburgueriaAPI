import jwt from "jsonwebtoken";
import postAuthorizationValidator from "./validators/postAuthorizationValidator.js";
import { listUsers } from "../../services/users.js";
import { listManagers } from "../../services/manager.js";
import { compareHash } from "../../utils/bcrypt.js";
import { NotFoundError, UnauthorizedError } from "../../utils/errorHandler.js";

export default async (req, res, next) => {
  try {
    let user;

    postAuthorizationValidator.parse(req.body)

    if(req.body.role == 'customer') {
      user = await listUsers({email: req.body.email})
    }

    else if(req.body.role == 'manager') {
      user = await listManagers({email: req.body.email})
    }

    if (!user.length) throw new NotFoundError('User not found!', {})
    
    const checkPassword = await compareHash(req.body.password, user[0].password)

    if (!checkPassword) throw new UnauthorizedError('Wrong password or email!', {})
    
    let payload;

    if (req.body.role == 'customer') {
      payload = {
        id: user[0]._id,
        name: user[0].name,  
        email: user[0].email,
        phone: user[0]?.phone,
        roles: req.body.role,
        exp: Math.floor(Date.now() / 1000) + (7*24*60*60)
      }
    } else {
      payload = {
        managerId: user[0]._id,
        name: user[0].name,  
        email: user[0].email,
        roles: req.body.role,
        exp: Math.floor(Date.now() / 1000) + (7*24*60*60)
      }
    }
    
    const secret = process.env.JWT_SECRET

    const token = jwt.sign(payload, secret)

    // retorna  obj token e payload
    res.status(200).send({
      status: "Authenticated",
      token, 
      payload
    })
    
  } catch (error) {
    next(error)

  }
}