import { z } from "zod";
import { Gender } from "@prisma/client";
export const userObject = z.object({
  firstName: z.string().min(1),
  lastName: z.string().min(1),
  placeOfBirth: z.string().min(1),
  dateOfBirth: z.string().min(1),
  email: z.coerce.string().email().min(6),
  timeOfBirth: z.string().min(1),
  gender: z.nativeEnum(Gender),
});
