import zod  from 'zod';

export default zod.object({
  name: zod.string().min(3).max(40),
})