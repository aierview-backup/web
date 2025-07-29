// shared/utils/logger.ts

import { ENVROLEMENT } from "./lib";

type LogLevel = "info" | "warn" | "error" | "debug";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  info: (msg: string, data?: any) => log("info", msg, data),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  warn: (msg: string, data?: any) => log("warn", msg, data),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  error: (msg: string, data?: any) => log("error", msg, data),
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  debug: (msg: string, data?: any) => log("debug", msg, data),
};
