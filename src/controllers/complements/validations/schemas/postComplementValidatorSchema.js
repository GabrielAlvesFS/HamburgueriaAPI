import zod from 'zod';
import { isValidObjectId } from '../../../../utils/validations.js';

export default zod.object({
  title: zod.string().min(3).max(100),
  items: zod.string().refine( isValidObjectId, {message: "Invalid ID!"} ).array(),
  required: zod.boolean(),
  min: zod.number().optional(),
  max: zod.number().optional()
}).strict()