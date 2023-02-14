import zod  from 'zod';
import { isValidObjectId } from '../../../utils/validations.js';

export default zod.object({
  id: zod.string().refine( isValidObjectId, {message: "Invalid ID!"}),
  label: zod.string().min(3).max(100).optional(),
  active: zod.boolean().optional()
}).strict()