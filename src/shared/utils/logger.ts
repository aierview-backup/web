// shared/utils/logger.ts

type LogLevel = "info" | "warn" | "error" | "debug";

const log = (level: LogLevel, message: string, data?: Error) => {
  const timestamp = new Date().toISOString();
  const formatted = `[${timestamp}] [${level.toUpperCase()}] ${message}`;

  if (process.env.NODE_ENV !== "production") {
    // Exibe no console local
    console[level](formatted, data ?? "");
  }

  // Envie para um backend ou serviço externo de logs no futuro
  // ex: Sentry, LogRocket, Datadog, etc.
};

export const logger = {
  info: (msg: string, data?: Error) => log("info", msg, data),
  warn: (msg: string, data?: Error) => log("warn", msg, data),
  error: (msg: string, data?: Error) => log("error", msg, data),
  debug: (msg: string, data?: Error) => log("debug", msg, data),
};
