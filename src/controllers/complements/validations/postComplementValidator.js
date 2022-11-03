import zod from 'zod';

export default zod.object({
  title: zod.string().min(3).max(100),
  items: zod.string().array(),
  required: zod.boolean(),
  min: zod.number().optional(),
  max: zod.number().optional()
}).strict()