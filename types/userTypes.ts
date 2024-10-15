import { Gender } from "@prisma/client";

export type userTypes = {
  firstName?: string;
  lastName?: string;
  dateObj?: Date;
  placeOfBirth?: string;
  timeOfBirth?: string;
  gender?: Gender | undefined;
  email?: string;
};
