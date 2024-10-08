import { Gender } from "@prisma/client";

export type userTypes = {
  firstName: string;
  lastName: string;
  dateOfBirth: Date;
  placeOfBirth: string;
  timeofBirth: Date;
  gender: Gender;
  email: string;
};
