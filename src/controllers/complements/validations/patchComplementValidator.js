import zod from 'zod';

export default zod.object({
  id: zod.string().refine((value) => /^[a-f\d]{24}$/.test(value), {message: "Invalid ID!"}),
  title: zod.string().min(3).max(100).optional(),
  items: zod.string().array().optional(),
  required: zod.boolean().optional(),
  min: zod.number().optional(),
  max: zod.number().optional()
}).strict()