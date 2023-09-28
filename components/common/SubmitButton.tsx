import React from "react";
import { experimental_useFormStatus as useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

const SubmitButton = () => {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      className="h-[3rem] w-[8rem] group flex items-center justify-center dark:shadow-white dark:shadow-sm gap-3  bg-gray-900 text-white px-6 py-3 rounded-full mt-2 outline-none transition-all focus:scale-110 hover:scale-110 hover:bg-gray-950 dark:bg-gray-950  active:scale-105 disabled:scale-100 disabled:bg-opacity-75"
      disabled={pending}
    >
      {pending ? (
        <div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
      ) : (
        <>
          Submit
          <FaPaperPlane className="transition-all group-hover:translate-x-1 group-hover:-translate-y-1 " />
        </>
      )}
    </button>
  );
};

export default SubmitButton;
