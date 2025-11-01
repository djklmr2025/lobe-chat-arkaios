import { ModelProvider } from 'model-bank';
import {
  OpenAICompatibleFactoryOptions,
  createOpenAICompatibleRuntime,
} from '../../core/openaiCompatibleFactory';

const DEFAULT_BASE_URL = 'http://127.0.0.1:4000/v1';

export const LobeArkaiossAI = createOpenAICompatibleRuntime({
  baseURL: DEFAULT_BASE_URL,
  chatCompletion: {
    handlePayload: (payload) => ({
      ...payload,
      stream: payload.stream ?? true,
    }),
  },
  debug: {
    chatCompletion: () => process.env.DEBUG_ARKAIOS_CHAT_COMPLETION === '1',
  },
  errorType: {
    bizError: (json) => !!json.error,
    invalidAPIKey: (error) => {
      const { errorResult } = error;
      return !!errorResult?.error?.message?.includes('Invalid API key');
    },
  },
  models: async (params) => {
    const { apiKey, baseURL = DEFAULT_BASE_URL } = params;

    try {
      const response = await fetch(`${baseURL}/models`, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP ${response.status}: ${response.statusText}`);
      }

      const data = await response.json();

      return (
        data.data?.map((model: any) => ({
          id: model.id,
          displayName: model.display_name || model.title || model.id,
          description: model.description || `ARKAIOS ${model.id} model`,
          enabled: true,
          functionCall: true,
          contextWindowTokens: model.context_length || 128000,
          vision:
            !!model.vision ||
            model.id?.toLowerCase?.().includes('vision') ||
            model.id?.toLowerCase?.().includes('multimodal') ||
            false,
        })) || []
      );
    } catch (error) {
      console.error('Error fetching ARKAIOS models:', error);
      // Fallback models if API is not available
      return [
        {
          id: 'lab',
          description: 'ARKAIOS Lab - Advanced AI Model',
          displayName: 'ARKAIOS Lab',
          enabled: true,
          functionCall: true,
          contextWindowTokens: 128000,
          vision: true,
        },
        {
          id: 'arkaios-gpt',
          description: 'ARKAIOS GPT - General Purpose Model',
          displayName: 'ARKAIOS GPT',
          enabled: true,
          functionCall: true,
          contextWindowTokens: 128000,
          vision: false,
        },
      ];
    }
  },
  provider: ModelProvider.Arkaios,
} satisfies OpenAICompatibleFactoryOptions);