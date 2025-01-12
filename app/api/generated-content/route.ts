
// app/api/generate/route.ts
import { NextRequest, NextResponse } from 'next/server';
import  Configuration, { OpenAIApi } from 'openai';

interface GenerateRequestBody {
  content: string;
  platform: string;
}

const configuration = new Configuration({
  apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your .env
});

const openai = new OpenAIApi(configuration);

export async function POST(req: NextRequest) {
  const { content, platform } = await req.json() as GenerateRequestBody;

  if (!content) {
    return NextResponse.json({ error: 'Content is required.' }, { status: 400 });
  }

  // Basic prompt logic (tweak to match your brand tone, length, style, etc.)
  let prompt = `You are a world-class copywriter and social media strategist. Convert the following content into a ${platform} post. Keep it concise, compelling, and in a confident, witty tone:\n\n${content}`;

  // Fine-tune this for each platform if you want more nuance
  if (platform === 'email') {
    prompt = `You are a persuasive copywriter. Convert the following content into an engaging email snippet or teaser. Use a friendly, witty style:\n\n${content}`;
  } else if (platform === 'headline') {
    prompt = `You are a top-tier copywriter. Convert the following content into a short, punchy headline or tagline:\n\n${content}`;
  }

  try {
    const response = await openai.createCompletion({
      model: 'text-davinci-003',
      prompt,
      max_tokens: 150,
      temperature: 0.7,
    });

    const aiText = response.data.choices[0].text?.trim() || '';
    return NextResponse.json({ output: aiText });
  } catch (error: any) {
    console.error('OpenAI Error:', error);
    return NextResponse.json({ error: 'Failed to generate content.' }, { status: 500 });
  }
}




// // pages/api/generate.ts
// import type { NextApiRequest, NextApiResponse } from 'next';
// import OpenAIApi from 'openai';
// import Configuration from 'openai';

// interface GenerateRequestBody {
//   content: string;
//   platform: string;
// }

// const configuration = new Configuration({
//   apiKey: process.env.OPENAI_API_KEY, // Ensure this is set in your .env
// });

// const openai = new OpenAIApi(configuration);

// export default async function handler(
//   req: NextApiRequest,
//   res: NextApiResponse
// ) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ error: 'Method Not Allowed' });
//   }

//   const { content, platform } = req.body as GenerateRequestBody;

//   if (!content) {
//     return res.status(400).json({ error: 'Content is required.' });
//   }

//   // Basic prompt logic (tweak to match your brand tone, length, style, etc.)
//   let prompt = `You are a world-class copywriter and social media strategist. Convert the following content into a ${platform} post. Keep it concise, compelling, and in a confident, witty tone:\n\n${content}`;

//   // Fine-tune this for each platform if you want more nuance
//   if (platform === 'email') {
//     prompt = `You are a persuasive copywriter. Convert the following content into an engaging email snippet or teaser. Use a friendly, witty style:\n\n${content}`;
//   } else if (platform === 'headline') {
//     prompt = `You are a top-tier copywriter. Convert the following content into a short, punchy headline or tagline:\n\n${content}`;
//   }

//   try {
//     const response = await openai.createCompletion({
//       model: 'text-davinci-003',
//       prompt,
//       max_tokens: 150,
//       temperature: 0.7,
//     });

//     const aiText = response.data.choices[0].text?.trim() || '';
//     return res.status(200).json({ output: aiText });
//   } catch (error: any) {
//     console.error('OpenAI Error:', error);
//     return res.status(500).json({ error: 'Failed to generate content.' });
//   }
// }
