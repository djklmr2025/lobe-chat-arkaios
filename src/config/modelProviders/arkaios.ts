import { ModelProviderCard } from '@/types/llm';

const Arkaios: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 128_000,
      description: 'ARKAIOS Lab - Modelo avanzado de IA con capacidades multimodales y razonamiento',
      displayName: 'ARKAIOS Lab',
      enabled: true,
      functionCall: true,
      id: 'lab',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description: 'ARKAIOS GPT - Modelo de propósito general con capacidades conversacionales',
      displayName: 'ARKAIOS GPT',
      enabled: true,
      functionCall: true,
      id: 'arkaios-gpt',
      vision: false,
    }
  ],
  checkModel: 'lab',
  description: 'ARKAIOS - Sistema de IA avanzado con capacidades de razonamiento, multimodal y conversacional. El futuro de la inteligencia artificial.',
  id: 'arkaios',
  name: 'ARKAIOS',
  settings: {
    defaultShowBrowserRequest: true,
    proxyUrl: {
      placeholder: 'http://127.0.0.1:4000/v1',
    },
    responseAnimation: {
      speed: 2,
      text: 'smooth',
    },
    showApiKey: true,
    showModelFetcher: true,
  },
  url: 'https://arkaios.ai',
};

export default Arkaios;