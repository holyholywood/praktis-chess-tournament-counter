import React from "react";

interface props {
  onStart: () => void;
  disabled?: boolean;
}
const StartButton = ({ onStart, disabled }: props) => {
  return (
    <button
      disabled={disabled}
      className="bg-blue-500 border border-blue-500 hover:bg-blue-600 duration-500 active:bg-blue-900 disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-300 text-white max-w-sm w-full block rounded-xl py-2 px-6"
      onClick={onStart}
    >
      Start
    </button>
  );
};
export default StartButton;
