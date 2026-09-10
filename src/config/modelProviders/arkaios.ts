import { ModelProviderCard } from '@/types/llm';

const Arkaios: ModelProviderCard = {
  chatModels: [
    {
      contextWindowTokens: 1_000_000,
      description: 'Gemini-Lab Omni (AETHYR Core / Reze): Co-agente multimodal oficial de ARKAIOS para procesamiento de medios, visión por computadora, automatización de escritorio y conexión continua.',
      displayName: 'ARKAIOS Gemini-Lab Omni (AETHYR Core)',
      enabled: true,
      functionCall: true,
      id: 'gemini-lab-omni',
      vision: true,
    },
    {
      contextWindowTokens: 1_000_000,
      description: 'Gemini-Lab Omni (AETHYR Core): Co-agente multimodal en vivo para procesamiento de medios, recortes e inferencia ultraligera.',
      displayName: 'ARKAIOS Gemini-Lab (AETHYR Core)',
      enabled: true,
      functionCall: true,
      id: 'lab',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description: 'PuterLab (Puter AI Agent): Agente oficial de PuterLab y Cloud OS Nexus. Especialista en orquestación en la nube, programación, automatización y ejecución de código multi-entorno.',
      displayName: 'ARKAIOS PuterLab (Puter AI Agent)',
      enabled: true,
      functionCall: true,
      id: 'puter-ai',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description: 'PuterLab AI: Acceso directo al motor conversacional y herramientas de Puter OS.',
      displayName: 'ARKAIOS Puter',
      enabled: true,
      functionCall: true,
      id: 'puter',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description: 'ARKAIOS Claude 3.5 Sonnet: Modelo insignia de razonamiento y código multimodal impulsado por Puter AI y Vercel Cloud.',
      displayName: 'ARKAIOS Claude 3.5 Sonnet (Puter AI)',
      enabled: true,
      functionCall: true,
      id: 'arkaios-claude-3-5-sonnet',
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
      contextWindowTokens: 128_000,
      description: 'ARKAIOS Genesis Chat: Modelo de chat ágil y soberano de ARKAIOS con soporte de funciones y visión.',
      displayName: 'ARKAIOS Genesis Chat',
      enabled: true,
      functionCall: true,
      id: 'arkaios-chat',
      vision: true,
    },
    {
      contextWindowTokens: 200_000,
      description: 'ARKAIOS Pro: Modelo premium con capacidades avanzadas de razonamiento profundo.',
      displayName: 'ARKAIOS Pro',
      enabled: true,
      functionCall: true,
      id: 'arkaios-pro',
      vision: true,
    },
  ],
  checkModel: 'gemini-lab-omni',
  description:
    'Pasarela Unificada de Inteligencia Artificial ARKAIOS: Orquestación integral con Gemini-Lab Omni (AETHYR Core), PuterLab, Edu Bridge y Desktop Local Bridge.',
  enabled: true,
  id: 'arkaios',
  name: 'ARKAIOS Gateway',
  settings: {
    defaultShowBrowserRequest: true,
    proxyUrl: {
      placeholder: 'http://127.0.0.1:8000/v1',
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