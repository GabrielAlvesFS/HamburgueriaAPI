import postOrderValidatorSchema from "./schemas/postOrderValidatorSchema.js";
import { getItem } from "../../../services/items.js";
import { getCategory } from "../../../services/category.js";
import { getComplement } from "../../../services/complement.js";
import { NotFoundError, InvalidAttributionError } from "../../../utils/errorHandler.js";

const itemsFromOrderValidation = async (itemsArr) => {
  
  const itemValidate = async (itemFromBody) => {
    const itemFromDB = await getItem(itemFromBody.id)
    if (!itemFromDB) throw new NotFoundError(
      "This item doesn't exist!", { items: {id: itemFromBody.id}}
    )
    if (!itemFromDB.active) throw new InvalidAttributionError(
      "You cannot add an item that is disabled", { items: {id: itemFromBody.id}}
    ) 
    
    const categoryData = await getCategory(itemFromDB.categoryId)
    if (categoryData.name === "Complements") throw new InvalidAttributionError(
      "You cannot add an item which contains the complements category in your order", { items: {id: itemFromBody.id}}
    )

    // Verificando no banco de dados se os grupos de complemento enviados no item existem
    if (itemFromBody?.complements) {
      await Promise.all(
        itemFromBody.complements.map( async (currComplement) => {
          const data = await getComplement(currComplement.id)
          if (!data) throw new NotFoundError(
            "This complement group doesn't exist!", { complements: {id: currComplement.id}}
          )
        })
      )
    }

    if (itemFromDB.complementsIds[0]) {
      //Pegando no banco de dados os dados dos grupos de complemento do real item
      const complementsFromDB = await Promise.all(
        itemFromDB.complementsIds.map( async (currComplement) => {
          return await getComplement(currComplement);
        })
      )
      
      // Verificando se os ids dos agrupamentos de complementos que estão na req são aceitaveis de acordo com os complementos do REAL ITEM
      const containAllPossibleComplements = itemFromBody.complements.every( 
        currComplement => itemFromDB.complementsIds.includes(currComplement.id)
      ) 

      if (!containAllPossibleComplements) throw new InvalidAttributionError(
        "One or more complement groups you are trying to add does not belong to the item in your order", {complements: itemFromBody.complements}
      )
    
      complementsFromDB.forEach( (complementFromDB) => {
        // ----
        // Verificando cada grupo de complementos do atual item para ver se tem grupo de complemento faltando ou a mais
        const repeatedOrMissingComplements = itemFromBody.complements.filter( (complementFromBody) => complementFromBody.id == complementFromDB._id )

        if ( complementFromDB.required ) {
          if (repeatedOrMissingComplements.length !== 1) throw new InvalidAttributionError(
            "An item in your order is missing a required complement group or there are duplicate complement groups", {complements: itemFromBody.complements}
          )
        } 
        else {
          if ( repeatedOrMissingComplements.length > 1) throw new InvalidAttributionError(
            "You cannot repeat the same group of complements on an item in your order", {complements: itemFromBody.complements}
          )
        }
        // ----

        itemFromBody.complements.forEach( (currComplement) => {
          if (currComplement.id == complementFromDB._id) {
            // Verificando cada item do grupo de complemento para ver se os itens escolhidos batem com o do DB
            const containAllPossibleItems = currComplement.items.every( (itemId) => {
              return complementFromDB.items.includes(itemId)
            }) 

            if (!containAllPossibleItems) throw new InvalidAttributionError(
              "One or more items chosen from the complements group does not belong to it", {complement: currComplement}
            )

            //Verificar se está dentre o min e o max
            const minItems = complementFromDB.min
            const maxItems = complementFromDB.max

            if (currComplement.items.length !== minItems && currComplement.items.length !== maxItems) throw new InvalidAttributionError(
              "The number of items chosen in the complements group is not between the minimum and maximum", {complement: currComplement}
            )

            // Verificando se há duplicatas
            const hasDuplicates = currComplement.items.length !== new Set(currComplement.items).size
            if (hasDuplicates) throw new InvalidAttributionError(
              "There are duplicate items in the selected items in the complements group", {complement: currComplement}
            )

          }
        })

      })

    } 

  }

  try {
    const itemsFromOrder = await Promise.all(
      itemsArr.map( async (currItem) => {
        await itemValidate(currItem)
      })
      
    )
    
  } catch (error) {
    throw error

  }
}

export const validate = async (body) => {
  try {
    postOrderValidatorSchema.parse(body)

    await itemsFromOrderValidation(body.items)

  } catch (error) {
    // Throwing error to controller
   throw error

  }
}