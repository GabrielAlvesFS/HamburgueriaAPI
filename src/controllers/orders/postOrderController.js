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
    await validate(req.body)

    const items = await mountOrder(req.body.items)
    const user = {
      id: req.payload.id,
      name: req.payload.name,
      email: req.payload.email,
      phone: req.payload?.phone
    }
    const amount = calcAmount(items)

    const order = {
      user,
      items,
      amount
    }

    // POST method
    // const data = await postOrder(order)
    res.status(200).send(order)


  } catch (error) {
      next(error)
    // res.status(400).send(error)
  }
}


  // const mountOrder = async (itemsArr) => {
  //   const itemsFromOrder = await Promise.all(

  //     itemsArr.map( async (item) => {
  //       // Pegando os dados de cada item do pedido
  //       const newItem = await getItem(item.id)

  //       // Se existir os complementos ele traz os dados dos complementos
  //       if (item.complements) {

  //         const newComplements = await Promise.all(
  //           item.complements.map( async (complement) => {
    
  //             const currComplement = await getComplement(complement.id)
              
  //             const newItems = await Promise.all(
  //               complement.items.map( async (item) => {
  //                 const currItem = await getItem(item)
  //                 return currItem
  //               })
  //             )
              
  //             return {
  //               complement: currComplement,
  //               selectedItems: newItems
  //             }
  //           })
  //         )

  //         return {
  //           item: newItem,
  //           complements: newComplements
  //         }

  //       }
  //       else {

  //         return {
  //           item: newItem
  //         }  

  //       }
        
  //     })
  //   )

  //   return itemsFromOrder
  // }  

  // Loop para cada grupo de complemento

  // const mountComplements = async (complements) => {

  //   const newComplements = complements.map( async (complement) => {

  //     const currComplement = await getComplement(complement.id)
      
  //     const newItems = complement.items.map( async (item) => {
  //       const currItem = await getItem(item)
  //       return currItem
  //     })
      
  //     return {
  //       complement: currComplement,
  //       selectedItems: newItems
  //     }
      

  //   })
  // }

// {
//   complements: [
//     {
//         complGroup: {
//           "_id": "63a9ad2aaadc3c13f2b99476",
//           "title": "Escolha o seu sachê",
//           "items": [
//               "63a9aae0aadc3c13f2b99457",
//               "63a9ab2daadc3c13f2b99459",
//               "63a9ab74aadc3c13f2b9945b",
//               "63a9abaeaadc3c13f2b9945d"
//           ],
//           "required": true,
//           "min": 1,
//           "max": 2,
//           "createdAt": "2022-12-26T14:18:18.270Z",
//           "updatedAt": "2022-12-26T14:18:18.270Z",
//           "__v": 0
//         },
//         items: [
//           {
//             "_id": "63a9aae0aadc3c13f2b99457",
//             "categoryId": "63a9a6a8aadc3c13f2b99454",
//             "active": false,
//             "name": "Maionese 8g",
//             "value": "0",
//             "imgUrl": "https://images.tcdn.com.br/img/img_prod/602464/90_maionese_heinz_sache_8g_caixa_192_unidades_78_1_20201014102025.png",
//             "complementsIds": [],
//             "createdAt": "2022-12-26T14:08:32.976Z",
//             "updatedAt": "2022-12-26T14:13:00.198Z",
//             "__v": 0
//           },
//           {
//             "_id": "63a9ab2daadc3c13f2b99459",
//             "categoryId": "63a9a6a8aadc3c13f2b99454",
//             "active": false,
//             "name": "Ketchup 9g",
//             "value": "0",
//             "imgUrl": "https://images.tcdn.com.br/img/img_prod/602464/90_ketchup_heinz_sache_9g_caixa_192_unidades_76_1_20201014101946.jpg",
//             "complementsIds": [],
//             "createdAt": "2022-12-26T14:09:49.136Z",
//             "updatedAt": "2022-12-26T14:13:11.909Z",
//             "__v": 0
//           }
//         ]
//     }
//   ]
// }



// {
//   items: [
//     // Item 1 do pedido
//     {
//       id: "63a9adecdaf7efdf35042535",
//       // se tiver complemento:
//       complements: [
//         // Grupo de complemento 1
//         {
//           // Saches
//           id: "63a9ad2aaadc3c13f2b99476",
//           // Itens Escolhidos:
//           itens: [
//             "63a9aae0aadc3c13f2b99457",
//             "63a9ab2daadc3c13f2b99459"
//           ]
//         }
//       ]
      
//     },

//     // Item 2 do pedido
//     {

//     }

//   ]
// }

// // Itens adquiridos -> Verificar estoque (mas n tem)
// // Forma de pagamento
// // Endereço de entrega (area de entrega? ) Qualquer endereço
// // calcular o preço dos itens
// // consultar itens no banco de dados (integridade)
// // [{item1, complement: []}, {item2}]

// // functions
// // mountOrders



// // requst -> o qvem
// // handler -> lida com os dados
// // response -> devolve os dados // pedido cadastrado


// // req, res

// // {
// //   id: "2131234"
// //   complements: [
//   //   {
//   //   id: "2323",
//   //   items: [
//   //   ...
// //   ]
// // }

// //   const newBody = await Promises.all(
// //   body.map( item=> {
// //     const newB = await chamada(body.id)
// //     return {
// //     ...newB
// //     complements: body.complements
// //   }
// //   })
// //   ) 
// //   const newBodyWithComplements = ....

// Teste do postman
// {
//   "items": [
//     {
//       "id": "63a9adecdaf7efdf35042535",
//       "complements": [
//         {
//           "id": "63a9ad2aaadc3c13f2b99476",
//           "items": [
//             "63a9aae0aadc3c13f2b99457",
//             "63a9ab2daadc3c13f2b99459"
//           ]
//         }
//       ]
//     },
//     {
//       "id": "63a9adecdaf7efdf35042535",
//       "complements": [
//         {
//           "id": "63a9ad2aaadc3c13f2b99476",
//           "items": [
//             "63a9aae0aadc3c13f2b99457",
//             "63a9ab2daadc3c13f2b99459"
//           ]
//         }
//       ]
//     },
//     {
//       "id": "63a9adecdaf7efdf35042535",
//       "complements": [
//         {
//           "id": "63a9ad2aaadc3c13f2b99476",
//           "items": [
//             "63a9aae0aadc3c13f2b99457",
//             "63a9ab2daadc3c13f2b99459"
//           ]
//         }
//       ]
//     }
//   ]
// }