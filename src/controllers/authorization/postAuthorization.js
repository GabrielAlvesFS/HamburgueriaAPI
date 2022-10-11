import { findUser } from "../../services/users.js";
import { compareHash } from "../../utils/bcrypt.js"

export default async (req, res) => {
  try {
    //coisas que imagino
    if(req.body.role == 'customer') {
      const user = await findUser({email: req.body.email})
    } 

    if(req.body.role == 'admin') {
      const user = await something// Aqui faz o get da tabela de admins
    }

    const data = await compareHash(req.body.password, user.password)
    res.send(data)
    
  } catch (error) {
    logger.error(error)
    res.send(error)
  }
}