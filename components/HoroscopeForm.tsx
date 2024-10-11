"use client";
import { useState } from "react";
import Button from "./ui/button";
import TextInput from "./ui/TextInput";
import { Gender } from "@prisma/client";
import createUser from "../actions/createUser";
import { cities } from "../data/cities";
import { useRouter } from "next/navigation";
export default function HororscopeForm() {
  const router = useRouter();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [placeOfBirth, setPlaceOfBirth] = useState("");
  const [gender, setGender] = useState<Gender>();
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
    const dateObj = new Date(dateOfBirth);

    const respone = await createUser({
      firstName,
      lastName,
      dateObj,
      gender,
      placeOfBirth,
      timeOfBirth,
      email,
    });
    if (respone.success) {
      alert("user created successfully");
    } else {
      alert("error while creating a user");
    }
  }
  return (
    <div className="mt-6">
      <h1 className="text-center text-white font-custom1 text-4xl mb-8">
        Unlock Your Zodiac Secrets
      </h1>
      <div className="flex justify-center mt-4 bg-">
        <div className="border rounded-md p-6">
          <div className="flex justify-between gap-x-8 mb-2">
            <TextInput
              label="First Name"
              type="text"
              className="w-56 h-8 border rounded-sm p-2"
              setState={setFirstName}
            ></TextInput>
            <TextInput
              label="Last Name"
              type="text"
              className="w-56 h-8 p-2"
              setState={setLastName}
            ></TextInput>
          </div>
          <div className="flex justify-between gap-x-8 mb-2">
            <TextInput
              label="Date of Birth"
              type="date"
              className="w-56 h-8 border rounded-sm p-2"
              setState={setDateofBirth}
            ></TextInput>
            <div className="flex flex-col">
              <label className="text-white mb-2" htmlFor={"Place of Birth"}>
                Birth Place
              </label>
              <input
                className="w-56 h-8 border rounded-sm p-2"
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
          <div className="flex justify-between gap-x-8 mb-2">
            <TextInput
              label="Time of Birth "
              type="time"
              className="w-56 h-8 border rounded-sm p-2"
              setState={setTimeOfBirth}
            ></TextInput>
            <div className="flex flex-col ">
              <label htmlFor="Gender" className="text-white mb-2 ">
                Gender
              </label>
              <select className="w-56 h-8 border rounded-sm">
                <option value="Male">Male</option>
                <option value="Female">Female</option>
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
