import zod from 'zod';

export default zod.string().refine((value) => /^[a-f\d]{24}$/.test(value), {message: "Invalid ID!"});