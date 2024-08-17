import { useEffect, useState } from "react";

interface timerProps {
  startTime: number;
  side: "white" | "black";
  active?: boolean;
  onClick: (side: boolean) => void;
  isResetting?: boolean;
  playerName?: string;
}
const Timer = ({ onClick, startTime = 10, active, side, isResetting, playerName }: timerProps) => {
  const [counter, setCounter] = useState<number>(0);
  useEffect(() => {
    setCounter(startTime * 3600);
  }, [startTime]);

  useEffect(() => {
    const interval = setInterval(() => {
      if (active && counter > 0) {
        setCounter(counter - 1);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [startTime, active, setCounter, counter]);

  useEffect(() => {
    if (isResetting) {
      setCounter(startTime * 3600);
    }
  }, [isResetting]);
  return (
    <div className="w-full space-y-2">
      <h2 className={`font-semibold text-2xl text-center ${side === "white" ? "rotate-180" : "hidden md:block"}  md:hidden`}>
        {playerName ? playerName : <span className="capitalize">{side} Player</span>}
      </h2>
      <div
        onClick={() => {
          onClick(Boolean(active));
        }}
        className={`text-7xl text-center flex items-center justify-center w-full aspect-video cursor-pointer ${
          side === "white" ? "bg-white text-black border-black md:rotate-0 rotate-180" : "bg-black text-white border-black"
        } border font-orbitron ${Boolean(counter <= 3600) ? (side === "white" ? "animate-textBlack" : "animate-textWhite") : ""}`}
      >
        {convertTwoDigit(Math.floor(counter / 3600))}:{convertTwoDigit(Math.floor(counter % 60))}
      </div>
      <h2 className={`font-semibold text-2xl text-center ${side === "black" ? "" : "hidden md:block"}`}>
        {playerName ? playerName : <span className="capitalize">{side} Player</span>}
      </h2>
    </div>
  );
};
export default Timer;
function convertTwoDigit(number: number) {
  return `${String(number).length > 1 ? number : `0${number}`}`;
}
