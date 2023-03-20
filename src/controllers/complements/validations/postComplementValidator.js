import postComplementValidatorSchema from "./schemas/postComplementValidatorSchema.js";
import { getItem } from "../../../services/items.js";
import { getCategory } from "../../../services/category.js";
import { NotFoundError, AssignmentError } from "../../../utils/errorHandler.js";

const itemsValidation = async (itemsIdsArr) => {
  try {
    let unacceptableItems = []

    for (const item of itemsIdsArr) {
      const data = await getItem(item)
      if (!data) throw new NotFoundError("This item doesn't exist!", { items: item})

      const category = await getCategory(data.categoryId)
      if (category.name !== "Complements") throw new AssignmentError(`You cannot add an item with this category: ${category.name}. Only add items with the category: complements`, {item: item})

      if (data.complementsIds[0]) unacceptableItems.push(item)

    }

    if (unacceptableItems[0]) throw new AssignmentError("You cannot create a complement where one of the items contains complements", {items: unacceptableItems}) 

  } catch (error) {
    throw error

  }

}

export const validate = async (body) => {
  try {
    postComplementValidatorSchema.parse(body)
    
    await itemsValidation(body.items)

  } catch (error) {
   // Throwing error to controller
   throw error

  }
}