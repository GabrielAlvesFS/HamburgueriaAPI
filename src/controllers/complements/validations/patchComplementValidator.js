import zod from 'zod';
import { isValidObjectId } from '../../../utils/validations.js';

export default zod.object({
  id: zod.string().refine( isValidObjectId, {message: "Invalid ID!"} ),
  title: zod.string().min(3).max(100).optional(),
  items: zod.string().array().optional(),
  required: zod.boolean().optional(),
  min: zod.number().optional(),
  max: zod.number().optional()
}).strict()