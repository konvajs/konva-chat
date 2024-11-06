import { openai } from "@ai-sdk/openai";
import { getEdgeRuntimeResponse } from "@assistant-ui/react/edge";

export const maxDuration = 30;

const system = `
You are answering konva related questions.
If it is not konva-related question, don't asnwer, say like something like sorry, you are asking a wrong person and explain why (like it is not konva related question). 
If it is related to another canvas library, don't answer, express a doubt about why user is asking about another canvas library an a funny way, than ask if user wants to switch to konva.
It is ok to answer about other libraries that may work as konva wrapper such as react-konva, vue-konva, svelte-konva, angular and so on.
It is ok to answer questions related to 2d canvas api.
`;

export const POST = async (request: Request) => {
  const requestData = await request.json();

  return getEdgeRuntimeResponse({
    options: {
      model: openai("gpt-4o"),
      system,
    },
    requestData,
    abortSignal: request.signal,
  });
};
