"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import placeHolder from "../../../images/PlacheHolder3.png";
import { useEffect, useState } from "react";
import checkToken from "@/actions/checkToken";
import { useRouter } from "next/navigation";
import getUserDetailsFromDb from "@/actions/getUserDetailsFromDb";
import checkAi from "@/actions/checkAi";
import { userTypes } from "@/types/userTypes";
import { log } from "console";
export default function UserHoroscope() {
  const router = useRouter();
  const params = useParams();
  const { firstName } = params;
  const userToken = localStorage.getItem("userToken");
  const name = Array.isArray(firstName) ? firstName[0] : firstName;
  const [openPanel, setOpenPanel] = useState<string | null>(null);
  const [userDetails, setUserDetails] = useState<userTypes | null>(null);
  const [general, setGeneral] = useState("");
  const [health, setHealth] = useState("");
  const [love, setLove] = useState("");
  const [career, setCareer] = useState("");
  const [userId, setUserId] = useState("");

  const togglePanel = (panel: string) => {
    setOpenPanel(openPanel === panel ? null : panel);
  };
  useEffect(() => {
    const checkUserToken = async () => {
      console.log("userToken ", userToken);

      if (userToken) {
        try {
          const response = await checkToken(userToken);
          console.log("response ", response);

          if (!response.success) {
            alert("Invalid user details");
            localStorage.removeItem("userToken");
            router.push("/");
          } else {
            console.log("response2 ", response.payload);
            if (typeof response.payload == "object") {
              setUserId(response.payload.userId);
            }
          }
        } catch (error: any) {
          alert("Error while fetching horoscope");
          console.error("Error details: ", error);

          if (error.message === "jwt expired") {
            localStorage.removeItem("userToken");
          }
          router.push("/");
        }
      } else {
        router.push("/");
      }
    };

    checkUserToken();
  }, [router, userToken]);
  useEffect(() => {
    const getUserDetails = async () => {
      const getUserDetails = await getUserDetailsFromDb(userId);
      setUserDetails(getUserDetails);
    };
    getUserDetails();
  }, [userId]);
  useEffect(() => {
    if (userDetails) {
      const getHoroscopeData = async () => {
        try {
          const response = await checkAi(userDetails);
          if (response.success) {
            console.log(response);

            console.log("horsocope data ", response.horoscopeData);
          } else {
            console.log(response.message);
          }
        } catch (error: any) {
          console.log(error);
        }
      };
      getHoroscopeData();
    }
  }, [userDetails]);
  return userToken ? (
    <div className="text-white mt-36">
      {/* {userId} */}
      <div className="">
        <div className="hover:text-[#DBF77E]">
          <h1 className="text-center font-custom1 text-3xl">
            Welcome, {name.toUpperCase()}! The universe is whispering its
            truths.
          </h1>
          <h1 className="text-center font-custom1 text-4xl mt-2">
            Let’s tune in to your horoscope!
          </h1>
        </div>

        <Image
          src={placeHolder}
          alt="placeholder"
          className="mt-12 w-[1300px] mx-auto mb-4"
        />
        {/* <h1 className="text-center font-custom1 text-4xl mt-6 hover:text-[#DBF77E]">
            Let the magic unfold – keep scrolling for more cosmic wisdom
          </h1> */}
      </div>
      <div>
        <div className="mt-6">
          <div
            onClick={() => togglePanel("general")}
            className={`cursor-pointer p-4 rounded-lg mt-4 transition-all duration-200 ${
              openPanel === "general" ? "bg-[#FFCCB3]" : "bg-gray-700"
            }`}
          >
            <h3
              className={`text-xl ${
                openPanel != null ? "text-black" : "text-white"
              } `}
            >
              General
            </h3>
            {openPanel === "general" && (
              <div className="mt-2 max-h-40 transition-all duration-300 text-black">
                {general}
              </div>
            )}
          </div>

          <div
            onClick={() => togglePanel("health")}
            className={`cursor-pointer p-4 rounded-lg mt-4 transition-all duration-200 ${
              openPanel === "health" ? "bg-green-600" : "bg-gray-700"
            }`}
          >
            <h3
              className={`text-xl ${
                openPanel != null ? "text-black" : "text-white"
              } `}
            >
              Health
            </h3>
            {openPanel === "health" && (
              <div className="mt-2 max-h-40 transition-all duration-300 text-black">
                {health}
              </div>
            )}
          </div>

          <div
            onClick={() => togglePanel("love")}
            className={`cursor-pointer p-4 rounded-lg mt-4 transition-all duration-200 ${
              openPanel === "love" ? "bg-red-600" : "bg-gray-700"
            }`}
          >
            <h3
              className={`text-xl ${
                openPanel != null ? "text-black" : "text-white"
              } `}
            >
              Love
            </h3>
            {openPanel === "love" && (
              <div className="mt-2 max-h-40 transition-all duration-300 text-black">
                {love}
              </div>
            )}
          </div>

          <div
            onClick={() => togglePanel("career")}
            className={`cursor-pointer p-4 rounded-lg mt-4 transition-all duration-200 ${
              openPanel === "career" ? "bg-blue-600" : "bg-gray-700"
            }`}
          >
            <h3
              className={`text-xl ${
                openPanel != null ? "text-black" : "text-white"
              } `}
            >
              Career
            </h3>
            {openPanel === "career" && (
              <div className="mt-2 max-h-40 transition-all duration-300 text-black">
                {career}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
