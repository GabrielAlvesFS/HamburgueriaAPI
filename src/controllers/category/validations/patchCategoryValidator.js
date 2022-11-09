import zod from 'zod';
import { isValidObjectId } from '../../../utils/validations.js';

export default zod.object({
  id: zod.string().refine( isValidObjectId, {message: "Invalid ID!"} ),
  name: zod.string().min(3).max(100).optional(),
  imgUrl: zod.string().max(2048).optional()
}).strict()