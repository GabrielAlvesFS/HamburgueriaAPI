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
  ),
  addressId: zod.string().refine( isValidObjectId, {message: "Invalid ID!"})
}).strict()
