import zod from 'zod';

export default zod.object({
  tilte: zod.string().min(3).max(100).optional(),
  required: zod.enum(["true", "false"]).optional(),
  min: zod.string().optional(),
  max: zod.string().optional()
}).strict()