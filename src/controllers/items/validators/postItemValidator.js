import zod  from 'zod';

export default zod.object({
  type: zod.string().min(3).max(14),
  active: zod.boolean(),
  name: zod.string().min(3).max(40),
  description: zod.string().min(3).max(100).optional(),
  value: zod.string(),
  imgUrl: zod.string().max(2048),
  complementsIDs: zod.array().optional()
}).strict()