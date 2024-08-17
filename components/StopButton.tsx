import React from "react";

interface props {
  onStop: () => void;
  disabled?: boolean;
}
const StopButton = ({ onStop, disabled }: props) => {
  return (
    <button
      disabled={disabled}
      className="bg-white-500 border border-blue-500 duration-500 text-blue-500 disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-300 max-w-sm w-full block rounded-xl py-2 px-6"
      onClick={onStop}
    >
      Stop
    </button>
  );
};
export default StopButton;
