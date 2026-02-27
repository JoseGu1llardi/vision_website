import { z } from "zod";
import { SERVICE_OPTIONS, MAX_MESSAGE_LENGTH } from "./constants";

export const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().refine(
    (v) => !v || (/^[\d\s+()-]+$/.test(v) && v.replace(/\D/g, "").length >= 7),
    "Please enter a valid phone number",
  ),
  location: z.string(),
  services: z.array(z.enum(SERVICE_OPTIONS)),
  message: z.string().max(MAX_MESSAGE_LENGTH, `Message must be ${MAX_MESSAGE_LENGTH} characters or less`),
});

export type ContactFormValues = z.infer<typeof contactSchema>;
