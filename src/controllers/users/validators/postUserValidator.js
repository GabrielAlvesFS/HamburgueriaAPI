import zod  from 'zod';
import { isValidCPF } from '../../../utils/validations.js';

export default zod.object({
  name: zod.string().min(3).max(100),
  email: zod.string().email(),
  cpf: zod.string().length(11).refine(isValidCPF, (value) => ({message: `invalid CPF: ${value}`}) ),
  password: zod.string(),
  birthdate: zod.preprocess((dateString) => new Date(zod.string(dateString).min(10, { message: "The date string must be at least 10 characters long"}).parse(dateString)), zod.date()),
  phone: zod.string().min(11).max(11)
}).strict()