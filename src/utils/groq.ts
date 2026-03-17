import Groq from 'groq-sdk';

export interface EvaluationResult {
  score: number;
  feedback: string;
  idealAnswer: string;
}

export interface CodeEvaluationResult {
  score: number;
  feedback: string;
  correctness: string;
  improvements: string;
  timeComplexity: string;
  spaceComplexity: string;
}

const SYSTEM_INSTRUCTION = `You are a friendly and experienced technical interviewer who evaluates candidates for software engineering roles.
Your goal is to provide honest, helpful, and encouraging feedback.
Always use simple, clear English — avoid jargon and complex sentences.
Keep your answers concise and easy to understand, like you are explaining to a student.
Focus on what is important for a real job interview, not academic theory.`;

function getGroqClient() {
  const apiKey = import.meta.env.VITE_GROQ_API_KEY;
  if (!apiKey || apiKey === 'your_groq_api_key_here') {
    throw new Error('Groq API key is missing. Please add VITE_GROQ_API_KEY to your .env file.');
  }
  // Initialize Groq client allowing browser access (since this is purely a frontend app)
  return new Groq({ apiKey, dangerouslyAllowBrowser: true });
}

export async function evaluateAnswer(question: string, userAnswer: string): Promise<EvaluationResult> {
  const groq = getGroqClient();

  const prompt = `
Interview Question: "${question}"
Candidate's Spoken Answer: "${userAnswer}"

Evaluate the candidate's answer out of 100. Use simple English.
- score: a number from 0 to 100
- feedback: 2-3 short sentences. Say what was good and what was missing.
- idealAnswer: a clear, simple answer that would impress an interviewer. Keep it under 5 lines.

Respond ONLY with valid JSON in this exact format (no markdown, no backticks):
{
  "score": <number 0-100>,
  "feedback": "<brief and simple feedback>",
  "idealAnswer": "<the ideal interview answer in simple English>"
}
`;

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_INSTRUCTION },
        { role: 'user', content: prompt }
      ],
      model: 'llama-3.3-70b-versatile', // Fast and accurate model for general reasoning
      temperature: 0.2, // Low temperature for more consistent JSON output
      response_format: { type: 'json_object' }
    });

    const responseText = chatCompletion.choices[0]?.message?.content || '{}';
    const parsed = JSON.parse(responseText);

    return {
      score: typeof parsed.score === 'number' ? parsed.score : 0,
      feedback: parsed.feedback || 'Could not parse feedback.',
      idealAnswer: parsed.idealAnswer || 'Could not parse ideal answer.'
    };
  } catch (error: any) {
    console.error('Error in evaluateAnswer:', error);
    const errorMessage = error?.message || 'Failed to evaluate the answer with Groq.';
    throw new Error(`Groq evaluation failed: ${errorMessage}`);
  }
}

export async function evaluateCode(question: string, code: string, language: string): Promise<CodeEvaluationResult> {
  const groq = getGroqClient();

  const prompt = `
DSA Problem: "${question}"
Language: ${language}
Candidate's Code:
\`\`\`${language}
${code}
\`\`\`

Review this code like an interviewer. Use simple English.
- score: 0 to 100 based on correctness, efficiency, and code quality
- feedback: 2-4 short sentences. What is good and what can be improved?
- correctness: Is the logic correct? Any edge cases missed?
- improvements: Specific suggestions to make this code better.
- timeComplexity: Time complexity (e.g., O(n), O(n log n))
- spaceComplexity: Space complexity (e.g., O(1), O(n))

Respond ONLY with valid JSON in this exact format (no markdown, no backticks):
{
  "score": <number 0-100>,
  "feedback": "<short overall feedback>",
  "correctness": "<correctness analysis>",
  "improvements": "<specific improvements>",
  "timeComplexity": "<time complexity>",
  "spaceComplexity": "<space complexity>"
}
`;

  try {
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: SYSTEM_INSTRUCTION },
        { role: 'user', content: prompt }
      ],
      model: 'llama-3.3-70b-versatile',
      temperature: 0.2,
      response_format: { type: 'json_object' }
    });

    const responseText = chatCompletion.choices[0]?.message?.content || '{}';
    const parsed = JSON.parse(responseText);

    return {
      score: typeof parsed.score === 'number' ? parsed.score : 0,
      feedback: parsed.feedback || 'Could not parse feedback.',
      correctness: parsed.correctness || '',
      improvements: parsed.improvements || '',
      timeComplexity: parsed.timeComplexity || 'N/A',
      spaceComplexity: parsed.spaceComplexity || 'N/A',
    };
  } catch (error: any) {
    console.error('Error in evaluateCode:', error);
    const errorMessage = error?.message || 'Failed to evaluate code with Groq.';
    throw new Error(`Code evaluation failed: ${errorMessage}`);
  }
}
