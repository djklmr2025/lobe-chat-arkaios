import { ModelProviderCard } from '@/types/llm';

const Arkaios: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 200_000,
      description: 'ARKAIOS Claude 3.5 Sonnet: Modelo insignia de razonamiento y código multimodal impulsado por Puter AI y Vercel Cloud.',
      displayName: 'ARKAIOS Claude 3.5 Sonnet',
      enabled: true,
      functionCall: true,
      id: 'arkaios-claude-3-5-sonnet',
      vision: true,
    },
    {
      contextWindowTokens: 1_000_000,
      description: 'Gemini-Lab Omni (AETHYR Core): Co-agente multimodal en vivo para procesamiento de medios, recortes e inferencia ultraligera.',
      displayName: 'ARKAIOS Gemini-Lab Omni',
      enabled: true,
      functionCall: true,
      id: 'lab',
      vision: true,
    },
    {
      contextWindowTokens: 128_000,
      description: 'ARKAIOS Edu Orquestador: Generador y auto-rellenador inteligente de plantillas escolares, documentos e imágenes.',
      displayName: 'ARKAIOS Edu Orquestador',
      enabled: true,
      functionCall: true,
      id: 'arkaios-edu-orquestador',
      vision: true,
    },
    {
      contextWindowTokens: 131_072,
      description: 'ARKAIOS Grok 2: Motor avanzado de razonamiento profundo y seguimiento estricto de instrucciones de xAI.',
      displayName: 'ARKAIOS Grok 2',
      enabled: true,
      functionCall: true,
      id: 'arkaios-grok-2',
    },
    {
      contextWindowTokens: 128_000,
      description: 'ARKAIOS GPT-4o: Modelo conversacional de propósito general con soporte multimodal.',
      displayName: 'ARKAIOS GPT-4o',
      enabled: true,
      functionCall: true,
      id: 'arkaios-gpt',
      vision: true,
    }
  ],
  checkModel: 'arkaios-claude-3-5-sonnet',
  description:
    'Pasarela Unificada de Inteligencia Artificial ARKAIOS: Orquestación multimodelo (Puter AI, Gemini-Lab, Edu Bridge y xAI) con integración completa en la nube de Vercel.',
  id: 'arkaios',
  name: 'ARKAIOS Gateway',
  settings: {
    defaultShowBrowserRequest: true,
    proxyUrl: {
      placeholder: 'https://eduacion-libre-proyecto-arkaios.vercel.app/api/bridge',
    },
    responseAnimation: {
      speed: 2,
      text: 'smooth',
    },
    showApiKey: true,
    showModelFetcher: false,
  },
  url: 'https://eduacion-libre-proyecto-arkaios.vercel.app',
};

export default Arkaios;