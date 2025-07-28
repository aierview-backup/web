import { z } from "zod";

export const technologySchema = z.object({
  role: z.string().min(2, "Role is required"),
  level: z.string().min(2, "Level is required"),
  programingLanguage: z.string().min(2, "Programing language is required"),
});

export type TechnologySchemaFormData = z.infer<typeof technologySchema>;
