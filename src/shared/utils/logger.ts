// shared/utils/logger.ts

import { ENVROLEMENT } from "./lib.";

type LogLevel = "info" | "warn" | "error" | "debug";

const log = (level: LogLevel, message: string, data?: any) => {
  const timestamp = new Date().toISOString();
  const formatted = `[${timestamp}] [${level.toUpperCase()}] ${message}`;

  if (ENVROLEMENT !== "production") {
    console[level](formatted, data ?? "");
  }
  // Envie para um backend ou serviço externo de logs no futuro
  // ex: Sentry, LogRocket, Datadog, etc.
};

export const logger = {
  info: (msg: string, data?: any) => log("info", msg, data),
  warn: (msg: string, data?: any) => log("warn", msg, data),
  error: (msg: string, data?: any) => log("error", msg, data),
  debug: (msg: string, data?: any) => log("debug", msg, data),
};
