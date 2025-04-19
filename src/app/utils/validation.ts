import { z } from "zod";

export const profileFormSchema = z.object({
  fullName: z.string().min(1, { message: "El nombre es requerido" }),
  currentRole: z.string().min(1, { message: "El rol actual es requerido" }),
  yearsOfExperience: z.coerce.number().min(0, {
    message: "Los años de experiencia deben ser un número positivo",
  }),
  technologiesUsed: z
    .string()
    .min(1, { message: "Debes ingresar por lo menos una tecnología" }),
  previousExperience: z.string().optional(),
  achievements: z.string().optional(),
  toneOfVoice: z
    .enum([
      "profesional",
      "formal",
      "inspiracional",
      "cercano",
      "creativo",
      "professional",
      "formal",
      "inspirational",
      "friendly",
      "creative",
    ] as const)
    .refine(() => true, {
      message: "Selecciona un tono de voz válido",
    }),
  language: z.enum(["es", "en"] as const).refine(() => true, {
    message: "Selecciona un idioma válido",
  }),
});

export type ProfileFormValues = z.infer<typeof profileFormSchema>;
