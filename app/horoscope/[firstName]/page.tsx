"use client";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import checkToken from "@/actions/checkToken";
import { useRouter } from "next/navigation";
import getUserDetailsFromDb from "@/actions/getUserDetailsFromDb";
import getHoroscopeDetails from "@/actions/getHoroscopeDetailsAi";
import { userTypes } from "@/types/userTypes";
import { toast } from "react-toastify";
import Loader from "@/components/Loader";
import ZodiacSignDetail from "@/components/ZodiacSignDetails";
import FlipCard from "@/components/CardFlip";
interface fieldInterface {
  name: string;
  value: string | undefined;
  color: string;
}
export default function UserHoroscope() {
  const router = useRouter();
  const params = useParams();
  const { firstName } = params;
  const userToken = localStorage.getItem("userToken");
  const name = Array.isArray(firstName) ? firstName[0] : firstName;
  const [userDetails, setUserDetails] = useState<userTypes | null>(null);
  const [general, setGeneral] = useState<string | undefined>();
  const [health, setHealth] = useState<string | undefined>();
  const [love, setLove] = useState<string | undefined>();
  const [career, setCareer] = useState<string | undefined>();
  const [userId, setUserId] = useState("");
  const [loading, setLoading] = useState(true);
  const fields = [];
  //   fields.push({ name: "general", value: general, color: "orange" });
  fields.push({ name: "health", value: health, color: "green" });
  fields.push({ name: "love", value: love, color: "red" });
  fields.push({ name: "career", value: career, color: "blue" });

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
        } catch (error: unknown) {
          toast.error("Error while fetching horoscope");
          console.error("Error details: ", error);

          if (error instanceof Error) {
            // Now TypeScript knows that 'error' has a 'message' property
            if (error.message === "jwt expired") {
              localStorage.removeItem("userToken");
            }
          } else {
            console.error("An unknown error occurred");
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
          const response = await getHoroscopeDetails(userDetails);
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
        } catch (error: unknown) {
          console.error(error);
        }
      };
      getHoroscopeData();
    }
  }, [userDetails]);
  useEffect(() => {
    if (
      general !== undefined &&
      health !== undefined &&
      love !== undefined &&
      career !== undefined
    ) {
      setLoading(false);
    }
  }, [general, health, love, career]);
  if (loading) {
    return <Loader></Loader>;
  }
  return (
    <div className="text-white mt-36 overflow-y-hidden">
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
        <div className="mt-6 ">
          <ZodiacSignDetail fieldState={general} />
        </div>

        <div className="">
          <div className="mt-6 space-y-4 md:space-y-0 md:grid  md:grid-cols-3  md:space-x-5 ml-4 flex-col item-center">
            {fields.map((field: fieldInterface, index: number) => {
              const fieldName = field.name;
              const fieldState = field.value;
              const color = field.color;
              return (
                <div key={index}>
                  <FlipCard
                    fieldState={fieldState}
                    fieldName={fieldName}
                    color={color}
                  ></FlipCard>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
