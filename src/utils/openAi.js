import OpenAI from 'openai';
import { OPEN_AI } from './constant';

const openAi = new OpenAI({
    apiKey: OPEN_AI, // This is the default and can be omitted
    dangerouslyAllowBrowse: true
});

export default openAi