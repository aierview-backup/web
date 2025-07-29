import { z } from "zod";

export const tableSelectionSchema = z.object({
  selectedIds: z.array(z.union([z.string(), z.number()])).optional(),
});

export type TableSelectionType = z.infer<typeof tableSelectionSchema>;
