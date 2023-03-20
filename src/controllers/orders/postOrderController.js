import { validate } from "./validations/postOrderValidator.js"
import { postOrder } from "../../services/order.js"
import { getComplement } from "../../services/complement.js"
import { getItem } from "../../services/items.js"

const mountOrder = async (itemsArr) => {

  const newItem = async (item) => {
    const data = await getItem(item.id)
    
    return {
      item: data,
      complements: item?.complements
    }
  }

  const newComplements = async (complements) => {
    return Promise.all(
      complements.map( async (complement) => {
        const currComplement = await getComplement(complement.id)

        const newSelectedItems = await Promise.all(
          complement.items.map( async (item) => {
            const currItem = await getItem(item)
            return currItem
          })
        )

        return {
          complement: currComplement,
          selectedItems: newSelectedItems
        }

      })
    )
  }

  const itemsFromOrder = await Promise.all(
    itemsArr.map( async (item) => {
      const itemData = await newItem(item)

      if (itemData.complements) {
        const complementsData = await newComplements(itemData.complements)

        return {
          item: itemData.item,
          complements: complementsData
        }
      }
      else {
        return {
          item: itemData.item
        }
      }
      
    })
    
  )

  return itemsFromOrder
}

const calcAmount = (items) => {
  return items.reduce((accumulator, currentValue) => accumulator + currentValue.item.value, 0)
}

export default async (req, res, next) => {
  try {
    const validationData = await validate(req.body, req.payload)

    const items = await mountOrder(req.body.items)
    const userData = {
      id: req.payload.id,
      name: req.payload.name,
      email: req.payload.email,
      phone: req.payload?.phone
    }

    const amount = calcAmount(items)
    const address = validationData.address
    const payment = validationData.payment

    const status = {
      name: "Em Aberto",
      userId: req.payload.id,
      timestamp: new Date(),
      history: [
        {
          name: "Em Aberto",
          userId: req.payload.id,
          timestamp: new Date(),
        }
      ]
    }

    const order = {
      userData,
      items,
      amount,
      address,
      payment,
      status 
    }

    // POST method
    const data = await postOrder(order)
    res.status(200).send(data)

  } catch (error) {
    next(error)
    
  }
}   
