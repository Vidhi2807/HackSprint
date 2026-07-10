// Shared constants used across frontend, backend, and extension

export const APP_NAME = 'NeuroLens AI';
export const APP_VERSION = '1.0.0';

export const AI_MODELS = {
  GEMINI: 'gemini',
  OLLAMA: 'ollama',
};

export const MESSAGE_ROLES = {
  USER: 'user',
  ASSISTANT: 'assistant',
  SYSTEM: 'system',
};

export const MEMORY_TYPES = {
  FACT: 'fact',
  PREFERENCE: 'preference',
  CONTEXT: 'context',
  SUMMARY: 'summary',
};

export const KNOWLEDGE_TYPES = {
  CONCEPT: 'concept',
  FACT: 'fact',
  REFERENCE: 'reference',
  NOTE: 'note',
};

export const TRUST_LEVELS = {
  HIGH: 'high',
  MEDIUM: 'medium',
  LOW: 'low',
  UNKNOWN: 'unknown',
};
