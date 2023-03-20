import zod from 'zod';
import { isValidObjectId } from "../../../utils/validations.js";

export default zod.object({
  userId: zod.string().refine( isValidObjectId, {message: "Invalid ID!"}).optional()
}).strict()