import zod  from 'zod';
import { isValidObjectId } from '../../../utils/validations.js';

export default zod.object({
  id: zod.string().refine( isValidObjectId, {message: "Invalid ID!"}),
  addressLabel: zod.string().min(3).max(100),
  streetNumber: zod.string()
}).strict()