'use client';
import grabUsername from "@/actions/grabUsername";
import SubmitButton from "@/components/buttons/SubmitButton";
import RightIcon from "@/components/icons/RightIcon";
import {redirect} from "next/navigation";
import {useState} from "react";

export default function UsernameForm({desiredUsername}) {
  const [taken,setTaken] = useState(false);
  async function handleSubmit(formData) {
    const result = await grabUsername(formData);

    setTaken(result === false);
    if (result) {
      redirect('/account?created='+formData.get('username'));
    }
  }
  return (
    <form action={handleSubmit}>
      <h1 className="mb-2 text-4xl font-bold text-center">
        Grab your username
      </h1>
      <p className="mb-6 text-center text-gray-500">
        Choose your username
      </p>
      <div className="max-w-xs mx-auto">
        <input
          name="username"
          className="block w-full p-2 mx-auto mb-2 text-center border"
          defaultValue={desiredUsername}
          type="text"
          placeholder="username" />
        {taken && (
          <div className="p-2 mb-2 text-center bg-red-200 border border-red-500">
            This username is taken
          </div>
        )}
        <SubmitButton>
          <span>Claim your username</span>
          <RightIcon />
        </SubmitButton>
      </div>
    </form>
  );
}
