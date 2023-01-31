import postOrderValidatorSchema from "./schemas/postOrderValidatorSchema.js";
import { getItem } from "../../../services/items.js";
import { getCategory } from "../../../services/category.js";
import { getComplement } from "../../../services/complement.js";
import { NotFoundError, InvalidAttributionError } from "../../../utils/errorHandler.js";

const itemsFromOrderValidation = async (itemsArr) => {
  
  const itemValidate = async (item) => {
    const itemData = await getItem(item.id)
    if (!itemData) throw new NotFoundError("This item doesn't exist!", { items: {id: item.id}})

    if (itemData.active !== true) throw new InvalidAttributionError("You cannot add an item that is disabled", { items: {id: item.id}})
    
    const categoryData = await getCategory(itemData.categoryId)
    if (categoryData.name === "Complements") throw new InvalidAttributionError("You cannot add an item which contains the complements category in your order", { items: {id: item.id}})

    // Verificando no banco de dados se os complementos enviados no item existem
    if (item?.complements) {
      await Promise.all(
        item.complements.map( async (complement) => {
          const data = await getComplement(complement.id)
          if (!data) throw new NotFoundError("This complement doesn't exist!", { complements: {id: complement.id}})
        })
      )

    }

    if (itemData.complementsIds[0]) {
      //Pegando no banco de dados os dados dos grupos de complemento do real item
      const complementsData = await Promise.all(
        itemData.complementsIds.map( async (complement) => {
          const data = await getComplement(complement);
          return data
        })
      )
      
      // Verificando se os ids dos agrupamentos de complementos que estão na req são aceitaveis de acordo com os complementos do REAL ITEM
      const containAllPossibleComplements = item.complements.every( (complement) => {
        return itemData.complementsIds.includes(complement.id)
      }) 

      //"You cannot add an add-on group that does not belong to the item in your order" 
      if (!containAllPossibleComplements) throw new InvalidAttributionError("One or more complement groups you are trying to add does not belong to the item in your order", {complements: item.complements})
    
      // Verificando se tem grupos de complementos repetindo
      for (let i = 0; i < complementsData.length; i++) {

        const id = complementsData[i]._id
        let count = 0

        // console.log("verificando o ID: " + id)

        item.complements.filter( (complement) => {
          // console.log("Testando: " + complement.id)
          if ( id == complement.id) {
            count++
            // console.log(count)
          }

        })
        
        //Caso passe do permitido ja lança o erro, caso o lançamento de erros fosse fora do filter, ele percorreria todo o array e iria somando no count - Tenho quase certeza mas a melhor alternativa seria dentro do filter mesmo
        // se o agrupamento de complementos nao for obrigatorio passa com count 0 e 1, caso seja obrigatorio so passa com o count 1
        if ( complementsData[i].required ) {
          if (count !== 1) throw new InvalidAttributionError("An item in your order is missing a required complement group or there are duplicate complement groups", {complements: item.complements})
        } 
        else {
          if ( count !== 0 && count !== 1) throw new InvalidAttributionError("You cannot repeat the same group of complements on an item in your order", {complements: item.complements})
        }

      }

      // O Array de complementos que vem na req tem de ser menor ou mesmo tamanho do arr de complementos do ITEM
      // Preciso verificar se o grupo/grupos de complemento que veio na req se bate com o do real item 
      // -----------------------------
  
      for (let i = 0; i < complementsData.length; i++) {
        const id = complementsData[i]._id

        // Verificar se os itens escolhidos batem com os itens do real grupo de complementos
        item.complements.filter( (complement) => { 
          if ( id == complement.id) {
            // console.log(complement)
            const containAllPossibleItems = complement.items.every( (itemId) => {
              return complementsData[i].items.includes(itemId)
            }) 

            // console.log("Verificando item do grupo de complemento: " + id)
            // console.log(containAllPossibleItems)
            
            if (!containAllPossibleItems) throw new InvalidAttributionError("One or more items chosen from the complements group does not belong to it", {complement: complement})

            //Verificar se está dentre o min e o max
            const minItems = complementsData[i].min
            const maxItems = complementsData[i].max

            if (complement.items.length !== minItems && complement.items.length !== maxItems) throw new InvalidAttributionError("The number of items chosen in the complements group is not between the minimum and maximum", {complement: complement})

            // Verificando se há duplicatas
            const hasDuplicates = complement.items.length !== new Set(complement.items).size
            if (hasDuplicates) throw new InvalidAttributionError("There are duplicate items in the selected items in the complements group", {complement: complement})

          }
        })
      }
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