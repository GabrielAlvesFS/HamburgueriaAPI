import { getOrder } from "../../../services/order.js"
import { AssignmentError, NotFoundError, UnauthorizedError } from "../../../utils/errorHandler.js"
import patchOrderValidatorSchema from "./schemas/patchOrderValidatorSchema.js"

export const validate = async (body, params, payload) => {
  const allowedStatuses = {
    'Em Aberto': ['Aceito', 'Cancelado'],
    'Aceito': ['Em Preparo', 'Cancelado'],
    'Em Preparo': ['Aguardando Entregador', 'Cancelado'],
    'Aguardando Entregador': ['Saiu para Entrega', 'Cancelado'],
    'Saiu para Entrega': ['Entregue'],
    'Cancelado': []
  }

  try {
    patchOrderValidatorSchema.parse({...params, ...body})
    
    const order = await getOrder(params.id)
    if (!order) throw new NotFoundError("This order doesn't exist", {id: params.id})

    // Customer
    if(payload?.id) {
      if (payload.id !== order.userData.id) throw new UnauthorizedError("Unauthorized", [])

      if (!allowedStatuses[order.status.name].includes(body.status.name) || body.status.name !== 'Cancelado') {
        throw new AssignmentError("You can only change the order status to 'Cancelado' and you can cancel as long as the order status is not 'Saiu para Entrega'!", {status: {name: body.status.name}})
      }
    }

    // Manager 
    if (payload?.managerId) {
      if (!allowedStatuses[order.status.name].includes(body.status.name)) {
        throw new AssignmentError(`You can only change the status to allowed statuses!`, 
          {
            status: {name: body.status.name},
            allowedStatuses: allowedStatuses[order.status.name]
          }
        )
      }
    }

    return order.status

  } catch (error) {
    throw error

  }
}