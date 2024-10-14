"use client";
import checkAi from "@/actions/checkAi";
import Button from "@/components/ui/button";
import { useState } from "react";
export default function TestAi() {
  const [text, setText] = useState("");
  return (
    <div className="bg-white h-90v">
      <h1 className="bg-white mt-40"> hi</h1>
      <p>{text}</p>
      <Button
        className="bg-red w-36"
        onClick={async () => {
          alert("clieked");
          console.log("debug ");

          const { poem } = await checkAi();
          setText(poem);
        }}
      >
        generate poem
      </Button>
    </div>
  );
}
