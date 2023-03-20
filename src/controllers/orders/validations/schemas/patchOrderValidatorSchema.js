import zod from 'zod';
import { isValidObjectId } from '../../../../utils/validations.js';

const status = ["Aceito", "Em Preparo", "Aguardando Entregador", "Saiu para Entrega", "Entregue", "Cancelado"]

export default zod.object({
  id: zod.string().refine( isValidObjectId, {message: "Invalid ID!"}),
  status: zod.object({
    name: zod.enum(status)
  })
}).strict()