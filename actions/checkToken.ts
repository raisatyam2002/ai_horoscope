"use server";
import jwt from "jsonwebtoken";

export default async function checkToken(userToken: string) {
  try {
    if (process.env.jwt) {
      const isVerify = jwt.verify(userToken, process.env.jwt);
      console.log("verify ", isVerify);

      return {
        success: true,
        payload: isVerify,
      };
    } else {
      return {
        success: false,
        message: "JWT secret is not defined.",
      };
    }
  } catch (error: any) {
    console.log("error ", error);

    return {
      success: false,
      message: error.message || "Error verifying token",
    };
  }
}
