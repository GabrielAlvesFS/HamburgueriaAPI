import zod  from 'zod';
import { isValidObjectId } from '../../../utils/validations.js';

export default zod.object({
  id: zod.string().refine( isValidObjectId, {message: "Invalid ID!"} ),
  name: zod.string().min(3).max(100).optional(),
  birthDate: zod.preprocess((dateString) => new Date(zod.string(dateString).min(10, { message: "The date string must be at least 10 characters long"}).parse(dateString)), zod.date()).optional(),
  phone: zod.string().optional(),
}).strict()