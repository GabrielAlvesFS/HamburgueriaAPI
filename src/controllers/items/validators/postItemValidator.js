import zod  from 'zod';
import { isValidObjectId } from '../../../utils/validations.js';

export default zod.object({
  type: zod.string().min(3).max(14),
  categoryId: zod.string().refine( isValidObjectId, {message: "Invalid ID!"}).optional(),
  active: zod.boolean(),
  name: zod.string().min(3).max(40),
  description: zod.string().min(3).max(100).optional(),
  value: zod.string(),
  imgUrl: zod.string().max(2048),
  complementsIDs: zod.array().optional()
}).strict()