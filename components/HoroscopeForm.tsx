"use client";
import { useState } from "react";
import Button from "./ui/button";
import TextInput from "./ui/TextInput";
import { Gender } from "@prisma/client";
import createUser from "../actions/createUser";
import { cities } from "../data/cities";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { userObject } from "../zodValidator/zodUsername";
export default function HororscopeForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [gender, setGender] = useState<Gender>(Gender.Male);
  const [timeOfBirth, setTimeOfBirth] = useState("");
  const [dateOfBirth, setDateofBirth] = useState("");
  const [email, setEmail] = useState("");
  const [isValidCity, setIsValidCity] = useState(true);
  function handleBlur() {
    if (placeOfBirth == "") {
      setIsValidCity(true);
      return;
    }
    if (!cities.includes(placeOfBirth)) {
      setPlaceOfBirth("");
      setIsValidCity(false);
    } else {
      setIsValidCity(true);
    }
  }
  async function handleSubmit() {
    try {
      const dateObj = new Date(dateOfBirth);
      const isDataValid = userObject.safeParse({
        firstName: firstName,
        lastName: lastName,
        placeOfBirth: placeOfBirth,
        dateOfBirth: dateOfBirth,
        gender: gender,
        timeOfBirth: timeOfBirth,
        email: email,
      });

      console.log("zod validity ", isDataValid);

      if (isDataValid.success) {
        try {
          const response = await createUser({
            firstName,
            lastName,
            dateObj,
            gender,
            placeOfBirth,
            timeOfBirth,
            email,
          });
          if (response.token) {
            localStorage.setItem("userToken", response.token);
            console.log("debug");

            toast.success("form filled successfully!");
            setFirstName("");
            setLastName("");
            setTimeOfBirth("");
            setPlaceOfBirth("");
            setEmail("");
            setDateofBirth("");
            router.push(`/horoscope/${firstName}`);
          }
        } catch (error) {
          console.log("error ", error);

          toast.error("server error");
        }
      } else {
        toast.error("invalid details");
        console.log("error while creating a user");
      }
    } catch (error) {
      console.log("error ", error);

      toast.error("error in while filling form try again after some time");
    }
  }
  return (
    <div className="mt-6" id="horoscope-form">
      <h1 className="text-center text-white font-custom1 text-4xl mb-8 hover:text-[#DBF77E]">
        Unlock the Mysteries of Your Zodiac – Fill Out the Form
      </h1>
      <div className="sm:flex sm:justify-center p-4 mt-4 ">
        <div className="border rounded-md p-6">
          <div className="sm:flex sm:justify-between sm:gap-x-8 mb-2">
            <TextInput
              label="First Name"
              type="text"
              className="sm:w-56 w-full h-8 border rounded-sm p-2"
              setState={setFirstName}
            ></TextInput>
            <TextInput
              label="Last Name"
              type="text"
              className="sm:w-56 w-full h-8 border rounded-sm p-2"
              setState={setLastName}
            ></TextInput>
          </div>
          <div className="sm:flex sm:justify-between sm:gap-x-8 mb-2 ">
            <TextInput
              label="Date of Birth"
              type="date"
              className="sm:w-56 w-full h-8 border rounded-sm p-2"
              setState={setDateofBirth}
            ></TextInput>
            <div className="flex flex-col sm:mt-0 mt-2">
              <label className="text-white mb-2" htmlFor={"Place of Birth"}>
                Birth Place
              </label>
              <input
                className="sm:w-56 w-full h-8 border rounded-sm p-2"
                list="birthPlaces"
                onChange={(e) => {
                  setPlaceOfBirth(e.target.value);
                }}
                onBlur={handleBlur}
              />
              <datalist id="birthPlaces">
                {cities.map((city, index) => (
                  <option key={index} value={city} />
                ))}
              </datalist>
              {!isValidCity && (
                <p className="text-red-500 text-xs mt-1">
                  Please select a valid city.
                </p>
              )}
            </div>
          </div>
          <div className="sm:flex sm:justify-between sm:gap-x-8 mb-2">
            <TextInput
              label="Time of Birth "
              type="time"
              className="sm:w-56 w-full h-8 border rounded-sm p-2"
              setState={setTimeOfBirth}
            ></TextInput>
            <div className="flex flex-col mt-2 sm:mt-0">
              <label htmlFor="Gender" className="text-white mb-2 ">
                Gender
              </label>
              <select
                className="sm:w-56 w-full h-8 border rounded-sm "
                onChange={(e) => {
                  setGender(e.target.value as Gender);
                }}
              >
                <option value={Gender.Male}>Male</option>
                <option value={Gender.Female}>Female</option>
              </select>
            </div>
          </div>
          <div className="mb-2">
            <TextInput
              label="Email "
              type="text"
              className="w-full h-8 border rounded-sm p-2"
              setState={setEmail}
            ></TextInput>
          </div>
          <div className="mt-4 flex justify-end">
            <Button
              className="border rounded-md bg-[#DBF77E] w-20 h-10"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
