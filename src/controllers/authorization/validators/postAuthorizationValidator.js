import zod  from 'zod';

const roles = ["manager", "customer"]

export default zod.object({
  email: zod.string().email(),
  password: zod.string(),
  role: zod.enum(roles)
})