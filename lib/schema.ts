import { z } from 'zod'

export const FormDataSchema = z.object({
  reName: z.string().min(1, 'Campaign name is required'),
  audience: z.string().min(1, 'Audience   is required'),
  keywords: z.string().min(1, 'Keywords are required'),
  brand: z.string().min(1, 'Brand is required'),
  existing: z.string().min(1, 'Existing content is required'),
  tone: z.string().min(1, 'Tone is required'),
  channels: z.string().min(1, 'Channels are required'),
  formats: z.string().min(1, 'Format is required')
})