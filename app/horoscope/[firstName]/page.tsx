"use client";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import checkToken from "@/actions/checkToken";
import { useRouter } from "next/navigation";
import getUserDetailsFromDb from "@/actions/getUserDetailsFromDb";
import checkAi from "@/actions/checkAi";
import { userTypes } from "@/types/userTypes";
import { toast } from "react-toastify";
import HoroscopeFiled from "../../../components/HoroscopeFields";
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
  const fields = [];
  fields.push({ name: "general", value: general, color: "orange" });
  fields.push({ name: "health", value: health, color: "green" });
  fields.push({ name: "love", value: love, color: "red" });
  fields.push({ name: "career", value: career, color: "blue" });

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
            toast.error("Invalid user details");
            localStorage.removeItem("userToken");
            router.push("/");
          } else {
            console.log("response2 ", response.payload);
            if (typeof response.payload == "object") {
              setUserId(response.payload.userId);
            }
          }
        } catch (error: any) {
          toast.error("Error while fetching horoscope");
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
            if (response.resJson) {
              setGeneral(response?.resJson?.general);
              setHealth(response.resJson.health);
              setLove(response.resJson.love);
              setCareer(response.resJson.career);
            }
          } else {
            console.error(response.message);
          }
        } catch (error: any) {
          console.error(error);
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
      </div>
      <div>
        <div className="mt-6">
          {fields.map((field: any, index: number) => {
            const fieldName = field.name;
            const fieldState = field.value;
            const color = field.color;

            return (
              <div key={index}>
                <HoroscopeFiled
                  togglePanel={togglePanel}
                  openPanel={openPanel}
                  fieldState={fieldState}
                  fieldName={fieldName}
                  color={color}
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  ) : (
    <div></div>
  );
}
