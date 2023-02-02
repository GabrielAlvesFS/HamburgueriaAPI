import zod from 'zod';
import { isValidObjectId } from '../../../../utils/validations.js';

export default zod.object({
  id: zod.string().refine( isValidObjectId, {message: "Invalid ID!"}),
  type: zod.string().min(3).max(14).optional(),
  active: zod.boolean().optional(),
  name: zod.string().min(3).max(40).optional(),
  description: zod.string().min(3).max(100).optional(),
  value: zod.number().optional(),
  imgUrl: zod.string().max(2048).optional(),
  complementsIds: zod.array(zod.string().refine( isValidObjectId, {message: "Invalid ID!"})).optional()
}).strict()