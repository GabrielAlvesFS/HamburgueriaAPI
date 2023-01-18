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

export default async (req, res, next) => {
  try {
    await validate(req.body)

    const result = await mountOrder(req.body.items)

    const order = {
      items: result
    }

    // POST method
    // const data = await postOrder(order)
    res.status(200).send(order)


  } catch (error) {
      next(error)
    // res.status(400).send(error)
  }
}
