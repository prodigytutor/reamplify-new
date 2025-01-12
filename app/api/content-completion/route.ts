import { generateObject } from 'ai';
import { google } from '@ai-sdk/google';
import { z } from 'zod';


const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI({ apiKey: process.env.GOOGLE_API_KEY });
const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

export async function POST(req: Request) {
  const { channels, existing, audience, tone}= await req.json();

 const prompt = `You are a world-class copywriter and social media strategist. Convert the following content into a ${channels} post that should resonate with ${audience}. Keep it concise, compelling, and in a ${tone} tone:\n\n${existing}`
  
 const result = await generateObject({
    model: google('gemini-1.5-flash'),
    system: 'You will be given some content that you should use to generate fresh new highly viral content with.',
    prompt,    
    schema: z.object({
      notifications: z.array(
        z.object({
          header: z.string().describe('Header for the content to post'),
          body: z.string().describe('Body for the post content.'),
          hashtags: z.string().array().describe('Hashtags to include in the post.'),
          image: z.string().optional().describe('Image URL to include in the post.'),
        }),
      ),
    }),
  });
console.log(result.response);
  return result.toJsonResponse();
}