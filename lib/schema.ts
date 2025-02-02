import { stat } from 'fs'
import { z } from 'zod'

export const FormDataSchema = z.object({
  name: z.string().min(1, 'Campaign name is required'),
  userId: z.number().min(1, 'User ID is required'),
  audience: z.string().min(1, 'Audience   is required'),
  keywords: z.string().min(1, 'Keywords are required'),
  brand: z.string().min(1, 'Brand is required'),
  existingContent: z.string().min(1, 'Existing content is required'),
  tone: z.string().min(1, 'Tone is required'),
  status: z.enum(['DRAFT', 'ACTIVE', 'INACTIVE', 'COMPLETED','CANCELLED']),
  channels: z.string().min(1, 'Channels are required'),
  format: z.string().min(1, 'Format is required')
})