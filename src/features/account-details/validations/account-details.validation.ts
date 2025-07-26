import {z} from "zod";


const roles = ["frontend", "mobile", "fullstack"] as const;
export const accountDetailsSchema = z.object({
    name: z
        .string()
        .min(2, "Name must be at least 2 characters")
        .max(50, "Name must be at most 50 characters"),
    role: z.string()
});

export type AccountDetailsFormData = z.infer<typeof accountDetailsSchema>;