import ResetButton from "@/components/ResetButton";
import SettingButton from "@/components/SettingButton";
import StartButton from "@/components/StartButton";
import StopButton from "@/components/StopButton";
import Timer from "@/components/Timer";
import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

const Home = () => {
  return (
    <div className="min-h-screen flex items-center pt-4 pb-8 justify-between flex-col md:gap-10">
      <Image src={"/assets/banner.gif"} alt="'banner" width={1000} height={200} className="md:block hidden" unoptimized />
      <Counter />
    </div>
  );
};

export default Home;

const Counter = () => {
  const [minutes, setMinutes] = useState<number>(10);
  const [playerOne, setPlayerOne] = useState<string>("");
  const [playerTwo, setPlayerTwo] = useState<string>("");
  const [isWhiteActive, setIsWhiteActive] = useState<boolean>(false);
  const [isBlackActive, setIsBlackActive] = useState<boolean>(false);
  const [isResettting, setIsResseting] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  function toggleActive(type?: "black" | "white") {
    if (type) {
      if (type === "white") {
        setIsWhiteActive(true);
        setIsBlackActive(false);
      } else {
        setIsBlackActive(true);
        setIsWhiteActive(false);
      }
    } else {
      if (isWhiteActive) {
        setIsBlackActive(true);
        setIsWhiteActive(false);
      } else if (isBlackActive) {
        setIsWhiteActive(true);
        setIsBlackActive(false);
      } else {
        setIsWhiteActive(true);
      }
    }
  }
  const handleSpaceClick = useCallback(
    (e: KeyboardEvent) => {
      if (e.key === " " && !isOpen) {
        if (!isWhiteActive && !isBlackActive) {
          setIsWhiteActive(true);
          return;
        }
        if (isWhiteActive) {
          setIsBlackActive(true);
          setIsWhiteActive(false);
          return;
        }
        if (isBlackActive) {
          setIsWhiteActive(true);
          setIsBlackActive(false);
          return;
        }
      }
    },
    [isWhiteActive, isBlackActive, isOpen]
  );
  useEffect(() => {
    window.addEventListener("keydown", handleSpaceClick);
    return () => window.removeEventListener("keydown", handleSpaceClick);
  }, [isWhiteActive, isBlackActive, isOpen]);
  useEffect(() => {
    if (isWhiteActive || isBlackActive) {
      setIsResseting(false);
    }
  }, [isWhiteActive, isBlackActive, isOpen]);
  return (
    <>
      <div className="max-w-7xl w-full flex flex-col md:flex-row items-center justify-center gap-8 h-fit min-h-screen md:min-h-0">
        <Timer
          playerName={playerOne}
          isResetting={isResettting}
          onClick={() => {
            setIsWhiteActive(true);
            setIsBlackActive(false);
          }}
          startTime={minutes}
          active={isWhiteActive}
          side="white"
        />
        <Timer
          playerName={playerTwo}
          isResetting={isResettting}
          onClick={() => {
            setIsBlackActive(true);
            setIsWhiteActive(false);
          }}
          startTime={minutes}
          active={isBlackActive}
          side="black"
        />
      </div>
      <div className="max-w-xl w-full flex justify-center items-center flex-col gap-3">
        <StartButton
          onStart={() => {
            setIsWhiteActive(true);
            setIsBlackActive(false);
          }}
          disabled={isWhiteActive || isBlackActive}
        />
        <StopButton
          onStop={() => {
            setIsWhiteActive(false);
            setIsBlackActive(false);
          }}
          disabled={!isWhiteActive && !isBlackActive}
        />
        <ResetButton
          onReset={() => {
            setIsResseting(true);
            setIsWhiteActive(false);
            setIsBlackActive(false);
          }}
        />
      </div>
      <SettingButton
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        minutes={minutes}
        playerOne={playerOne}
        playerTwo={playerTwo}
        onSubmit={(minute, playerOne, playerTwo) => {
          setMinutes(minute);
          setPlayerOne(playerOne);
          setPlayerTwo(playerTwo);
        }}
      />
    </>
  );
};
