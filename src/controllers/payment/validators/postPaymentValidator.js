import zod from 'zod';

export default zod.object({
  label: zod.string().min(3).max(100),
  active: zod.boolean()
}).strict()