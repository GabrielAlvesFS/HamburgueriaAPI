import zod  from 'zod';

export default zod.object({
  _id: zod.string().refine((value) => /^[a-f\d]{24}$/.test(value), {message: "Invalid ID!"}).optional(),
  name: zod.string().min(3).max(100).optional(),
  email: zod.string().email().optional()
})