import { z } from 'zod'

export const createAdSchema = z.object({
  title: z
    .string()
    .min(5, 'Название должно быть не менее 5 символов')
    .max(100, 'Название не должно превышать 100 символов'),
  price: z.coerce
    .number()
    .positive('Цена обязательна и должна быть больше 0')
    .max(10000000, 'Цена не должна превышать 10 000 000 рублей'),
  description: z
    .string()
    .min(0)
    .max(3000, 'Описание не должно превышать 3000 символов'),
  condition: z.enum(['new', 'used', 'refurbished'], {
    errorMap: () => ({ message: 'Необходимо выбрать состояние' }),
  }),
  photos: z
    .array(z.instanceof(File))
    .min(1, 'Необходима хотя бы одна фотография')
    .optional(),
  characteristics: z
    .record(
      z.union([
        z.preprocess(val => {
          if (typeof val === 'string' && !isNaN(Number(val))) {
            return Number(val)
          }
          return val
        }, z.number().positive('Поле должно быть больше 0').optional()),
        z.string(),
        z.boolean(),
      ])
    )
    .optional(),
})

export type CreateAdFormData = z.infer<typeof createAdSchema>
