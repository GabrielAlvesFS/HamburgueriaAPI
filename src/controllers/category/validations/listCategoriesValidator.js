import zod from 'zod';

export default zod.object({
  name: zod.string().min(3).max(100).optional(),
  active: zod.boolean().optional()
}).strict()