import zod from 'zod';
import { isValidObjectId } from '../../../utils/validations.js';

export default zod.object({
  type: zod.string().min(3).max(14).optional(),
  name: zod.string().min(3).max(40).optional(),
  value: zod.string().optional(),
  active: zod.enum(["true", "false"]).optional(),
  categoryId: zod.string().refine( isValidObjectId, {message: "Invalid ID!"}).optional(),
  complementsIds: zod.string().refine( isValidObjectId, {message: "Invalid ID!"}).optional()
}).strict()