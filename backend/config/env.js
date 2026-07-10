import dotenv from 'dotenv';
dotenv.config();

export const config = {
  port: process.env.PORT || 5000,
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoUri: process.env.MONGODB_URI || 'mongodb://localhost:27017/neurolens',
  jwtSecret: process.env.JWT_SECRET || 'neurolens-dev-secret',
  corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:5173',

  // Future AI configs
  geminiApiKey: process.env.GEMINI_API_KEY || '',
  ollamaBaseUrl: process.env.OLLAMA_BASE_URL || 'http://localhost:11434',
};
