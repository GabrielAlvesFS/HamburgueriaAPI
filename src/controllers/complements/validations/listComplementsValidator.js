import zod from 'zod';

export default zod.object({
  tilte: zod.string().min(3).max(100).optional(),
  required: zod.boolean().optional(),
  min: zod.number().optional(),
  max: zod.number().optional()
}).strict()