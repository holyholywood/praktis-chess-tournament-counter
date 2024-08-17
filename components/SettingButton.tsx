import React, { useState } from "react";
import { RiCloseLine, RiSettingsLine } from "react-icons/ri";

interface settings {
  playerOne: string;
  playerTwo: string;
  minutes: number;
  onSubmit: (time: number, playerOne: string, playerTwo: string) => void;
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SettingButton = ({ minutes, playerOne, playerTwo, onSubmit, isOpen, setIsOpen }: settings) => {
  const [time, setTime] = useState<number>(minutes);
  const [playerOneName, setPlayerOneName] = useState<string>(playerOne);
  const [playerTwoName, setPlayerTwoName] = useState<string>(playerTwo);
  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 duration-500 fixed text-white p-3 rounded-full shadow-lg right-6 md:right-20 bottom-10"
      >
        <RiSettingsLine size={24} />
      </button>
      {isOpen && (
        <div className="bg-black/50 fixed top-0 w-screen h-screen" onClick={() => setIsOpen(false)}>
          <div
            onClick={(e) => e.stopPropagation()}
            className={`bg-white max-w-xl py-4 px-8 w-full mx-auto absolute top-4 inset-x-0 rounded-md space-y-4 ${
              isOpen ? "translate-y-0" : "-translate-y-[calc(100%+4rem)]"
            } delay-500 duration-1000 `}
          >
            <div className="flex items-center justify-between">
              <h2 className="text-lg font-bold text-center">Settings</h2>
              <button onClick={() => setIsOpen(false)}>
                <RiCloseLine />
              </button>
            </div>
            <div className="space-y-1">
              <label htmlFor="playerOne" className="font-semibold">
                Player 1
              </label>
              <input
                value={playerOneName}
                onChange={(e) => setPlayerOneName(e.target.value)}
                type="text"
                id="playerOne"
                className="focus:outline-none w-full border border-gray-200 rounded px-2 py-1 block"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="playerTwo" className="font-semibold">
                Player 2
              </label>
              <input
                value={playerTwoName}
                onChange={(e) => setPlayerTwoName(e.target.value)}
                type="text"
                id="playerTwo"
                className="focus:outline-none w-full border border-gray-200 rounded px-2 py-1 block"
              />
            </div>
            <div className="space-y-1">
              <label htmlFor="playerTwo" className="font-semibold">
                Time
              </label>
              <input
                value={time}
                onChange={(e) => setTime(Number(e.target.value))}
                min={1}
                type="number"
                id="playerTwo"
                className="focus:outline-none border border-gray-200 rounded px-2 py-1 block"
              />
            </div>
            <div className="pt-8 flex justify-end">
              <button
                onClick={() => {
                  onSubmit(time, playerOneName, playerTwoName);
                  setIsOpen(false);
                }}
                className="bg-blue-500 border border-blue-500 hover:bg-blue-600 duration-500 active:bg-blue-900 disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-300 text-white block rounded-xl py-2 px-6"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SettingButton;
