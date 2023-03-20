import zod  from 'zod';
import { isValidObjectId } from '../../../utils/validations.js';

export default zod.object({
  _id: zod.string().refine( isValidObjectId, {message: "Invalid ID!"} ).optional(),
  name: zod.string().min(3).max(100).optional(),
  email: zod.string().email().optional()
})