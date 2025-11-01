import { AIChatModelCard } from '../types/aiModel';

export const arkaiosChatModels: AIChatModelCard[] = [
  {
    abilities: {
      functionCall: true,
      vision: true,
    },
    contextWindowTokens: 128_000,
    description: 'Modelo de chat avanzado de ARKAIOS con capacidades de función y visión',
    displayName: 'ARKAIOS Chat',
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
    description: 'Modelo premium de ARKAIOS con capacidades avanzadas de razonamiento',
    displayName: 'ARKAIOS Pro',
    enabled: true,
    id: 'arkaios-pro',
    maxOutput: 8192,
    type: 'chat',
  },
];

export const allModels = [...arkaiosChatModels];

export default allModels;