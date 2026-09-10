import { AIChatModelCard } from '../types/aiModel';

export const arkaiosChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 1_000_000,
    description: 'Co-Agente oficial multimodal de ARKAIOS (AETHYR Core / Reze). Especialista en procesamiento de medios, visión por computadora, automatización de escritorio y conexión continua.',
    displayName: 'ARKAIOS Gemini-Lab Omni (AETHYR Core)',
    enabled: true,
    id: 'gemini-lab-omni',
    maxOutput: 8192,
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 1_000_000,
    description: 'Gemini-Lab Omni (AETHYR Core): Co-agente multimodal en vivo para procesamiento de medios, recortes e inferencia ultraligera.',
    displayName: 'ARKAIOS Gemini-Lab (AETHYR Core)',
    enabled: true,
    id: 'lab',
    maxOutput: 8192,
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description: 'Agente oficial de PuterLab y Cloud OS Nexus. Especialista en orquestación en la nube, programación, automatización y ejecución de código multi-entorno.',
    displayName: 'ARKAIOS PuterLab (Puter AI Agent)',
    enabled: true,
    id: 'puter-ai',
    maxOutput: 8192,
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description: 'PuterLab AI: Acceso directo al motor conversacional y herramientas de Puter OS.',
    displayName: 'ARKAIOS Puter',
    enabled: true,
    id: 'puter',
    maxOutput: 8192,
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description: 'ARKAIOS Claude 3.5 Sonnet: Modelo insignia de razonamiento y código multimodal impulsado por Puter AI y Vercel Cloud.',
    displayName: 'ARKAIOS Claude 3.5 Sonnet (Puter AI)',
    enabled: true,
    id: 'arkaios-claude-3-5-sonnet',
    maxOutput: 8192,
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description: 'ARKAIOS Edu Orquestador: Generador y auto-rellenador inteligente de plantillas escolares, documentos e imágenes.',
    displayName: 'ARKAIOS Edu Orquestador',
    enabled: true,
    id: 'arkaios-edu-orquestador',
    maxOutput: 4096,
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description: 'Modelo de chat avanzado y ágil de ARKAIOS con capacidades de función y visión.',
    displayName: 'ARKAIOS Genesis Chat',
    enabled: true,
    id: 'arkaios-chat',
    maxOutput: 4096,
    type: 'chat',
  },
  {
    abilities: {
      functionCall: true,
      reasoning: true,
      vision: true,
    },
    contextWindowTokens: 200_000,
    description: 'Modelo premium de ARKAIOS con capacidades avanzadas de razonamiento.',
    displayName: 'ARKAIOS Pro',
    enabled: true,
    id: 'arkaios-pro',
    maxOutput: 8192,
    type: 'chat',
  },
];

export const allModels = [...arkaiosChatModels];

export default allModels;