import zod from 'zod';
import { isValidObjectId, isValidCEP } from '../../../utils/validations.js';

export default zod.object({
  userId: zod.string().refine( isValidObjectId, {message: "Invalid ID!"}),
  addressLabel: zod.string().min(3).max(100),
  postcode: zod.string().refine( isValidCEP, {message: "Invalid CEP!"}),
  city: zod.string(),
  state: zod.string(),
  streetName: zod.string(),
  streetNumber: zod.string()
}).strict()