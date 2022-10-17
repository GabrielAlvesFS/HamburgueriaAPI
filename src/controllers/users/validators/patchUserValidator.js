import zod  from 'zod';

export default zod.object({
  id: zod.string().refine((value) => /^[a-f\d]{24}$/.test(value), {message: "Invalid ID!"}),
  name: zod.string().min(3).max(100).optional(),
  birthDate: zod.string().optional(),
  phone: zod.string().optional(),
}).strict()