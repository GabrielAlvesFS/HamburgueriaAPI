import zod from 'zod';
import { isValidObjectId } from '../../../../utils/validations.js';

export default zod.string().refine( isValidObjectId, {message: "Invalid ID!"} );