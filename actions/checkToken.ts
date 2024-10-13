"use server";
import jwt from "jsonwebtoken";
export default async function checkToken(userToken: string) {
  try {
    if (process.env.jwt) {
      const isVerify = jwt.verify(userToken, process.env.jwt);
      console.log("verfiy ", isVerify);

      if (isVerify) {
        return {
          success: true,
        };
      } else {
        return {
          success: false,
        };
      }
    } else {
      return {
        success: false,
      };
    }
  } catch (error) {
    console.log("error ", error);

    return {
      success: false,
    };
  }
}
