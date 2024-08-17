import React from "react";

interface props {
  onReset: () => void;
}
const ResetButton = ({ onReset }: props) => {
  return (
    <button className="bg-red-500 border border-red-500 text-white max-w-sm w-full block rounded-xl py-2 px-6" onClick={onReset}>
      Reset
    </button>
  );
};

export default ResetButton;
