import zod  from 'zod';
import { isValidObjectId } from '../../../../utils/validations.js';

export default zod.object({
  categoryId: zod.string().refine( isValidObjectId, {message: "Invalid ID!"}),
  active: zod.boolean(),
  name: zod.string().min(3).max(40),
  description: zod.string().min(3).max(150).optional(),
  value: zod.string(),
  imgUrl: zod.string().max(2048),
  complementsIds: zod.array(zod.string().refine( isValidObjectId, {message: "Invalid ID!"})).optional()
}).strict()