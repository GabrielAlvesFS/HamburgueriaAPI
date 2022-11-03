import zod from 'zod';

export default zod.object({
  type: zod.string().min(3).max(14).optional(),
  name: zod.string().min(3).max(40).optional(),
  value: zod.string().optional(),
  active: zod.boolean().optional()
}).strict()