import zod from 'zod';

export default zod.object({
  name: zod.string().min(3).max(100),
  imgUrl: zod.string().max(2048).optional()
}).strict()