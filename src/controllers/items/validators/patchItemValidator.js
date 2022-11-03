import zod from 'zod';

export default zod.object({
  id: zod.string().refine((value) => /^[a-f\d]{24}$/.test(value), {message: "Invalid ID!"}),
  type: zod.string().min(3).max(14).optional(),
  active: zod.boolean().optional(),
  name: zod.string().min(3).max(40).optional(),
  description: zod.string().min(3).max(100).optional(),
  value: zod.string().optional(),
  imgUrl: zod.string().max(2048).optional(),
  complementsIDs: zod.array().optional()
}).strict()