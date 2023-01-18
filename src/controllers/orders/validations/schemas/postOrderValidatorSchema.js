import zod from 'zod';
import { isValidObjectId } from '../../../../utils/validations.js';

export default zod.object({
  items: zod.array( 
    zod.object({
      id: zod.string().refine( isValidObjectId, {message: "Invalid ID!"}),
      complements: zod.array(
        zod.object({
          id: zod.string().refine( isValidObjectId, {message: "Invalid ID!"}),
          items: zod.array(zod.string().refine( isValidObjectId, {message: "Invalid ID!"}))
        })
      ).optional()
    })
  )
}).strict()

// Validator do schema
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
//         },
//         {
//           "id": "63a9ad2aaadc3c13f2b99476",
//           "items": [
//             "63a9aae0aadc3c13f2b99457"
//           ]
//         }
//       ]
//     },
//     {
//       "id": "63b5c1766d82b760148fd5da"
//     }
//   ]
// }