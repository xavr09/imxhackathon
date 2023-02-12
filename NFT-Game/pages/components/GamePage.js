import { Alert } from "flowbite-react";
import { useRouter } from "next/router";
import React, { useState } from "react";
import data from "../gameData.json";
import { RevolvingDot } from "react-loader-spinner";

const GamePage = () => {
  const [selectedFighters, SetSelectedFigthers] = useState([]);
  const [fouted, setFouted] = useState([]);
  const [scores, setSccores] = useState(0);
  const [compScores, setCompScores] = useState(0);
  const [yourProgress, setYourProgress] = useState([]);
  const [computerProgress, setComputerProgress] = useState([]);
  const router = useRouter();
  console.log("Game Data -", data);
  const computer = data.data.slice(0, 3);
  const you = data.data.slice(3, 6);

  // Functions
  const setFighter = (fighter) => {
    if (selectedFighters.length !== 0) {
      alert("A Session is going on ");
      return;
    }
    if (yourProgress.length === 3) {
      let count = yourProgress.filter((item) => item === "success").length;
      if (count > 2) {
        alert("You Win Player's Name...");
        router.push("/");
      } else {
        alert("You Losed' 😩 Please try again next time...");
        router.push("/");
      }
      // Stop the Game
    }
    // Check if the fighter has fought
    if (fouted.includes(fighter.id)) {
      alert("You can't use a fighter twice 🤺");
      return;
    }
    let message = "";
    let randomId = Math.trunc(Math.random() * 3);
    SetSelectedFigthers([fighter, computer[randomId]]);
    console.log("Selected-fighters", selectedFighters);

    setFouted((prev) => [...prev, fighter.id, computer[randomId].id]);
    console.log("Faught -", fouted);
    setTimeout(() => {
      if (selectedFighters[0]?.rank > selectedFighters[1]?.rank) {
        setSccores((prev) => (prev += 1));
        setYourProgress((prev) => [...prev, "green"]);
        setComputerProgress((prev) => [...prev, "red"]);
        alert("Nice One, Show them what you've got 🎉");
      } else {
        alert("You Failed, Try Again 🔴");
        setCompScores((prev) => (prev += 1));
        setYourProgress((prev) => [...prev, "red"]);
        setComputerProgress((prev) => [...prev, "green"]);
      }
      SetSelectedFigthers([]);
    }, 5000);
  };
  const quitGame = () => {
    alert("Are you sure i you want to quit the game ?");
    router.push("/");
  };
  return (
    <>
      <div className="h-screen flex flex-col gap-14 items-center justify-center">
        <div className="flex gap-5">
          <p className="font-semibold">Computer (Score):{compScores}</p>
          <div className="flex gap-5">
            <div
              className={`border-2 bg-${computerProgress[0]}-500 border-gray-300 h-5 w-5 rounded-full`}
            ></div>
            <div
              className={`border-2 bg-${computerProgress[1]}-500 border-gray-300 h-5 w-5 rounded-full`}
            ></div>
            <div
              className={`border-2 bg-${computerProgress[2]}-500 border-gray-300 h-5 w-5 rounded-full`}
            ></div>
          </div>
        </div>
        <div className="flex items-center gap-5">
          {computer.map((x) => {
            let fought;
            if (fouted.includes(x.id)) {
              fought = true;
            }
            return (
              <div
                key={x.id}
                className={`border-2  border-gray-500  rounded-full h-40 w-40`}
              >
                <img
                  src={x.imageUrl}
                  alt="img"
                  className={`img ${
                    fought ? "blur-sm" : ""
                  } rounded-full h-40 w-40 ease-in-out  object-fit object-cover`}
                />
              </div>
            );
          })}
        </div>

        <div className="text-center flx items-center">
          {selectedFighters.length == 0 && (
            <p className="mb-2 italic">Select Your Fighting Character</p>
          )}

          {selectedFighters.length !== 0 && (
            <>
              <div className="grid grid-cols-3 items-center">
                <div className="">
                  <img
                    src={selectedFighters[0]?.imageUrl}
                    className="h-10 w-10 rounded-full"
                    alt="imgUrl"
                  />
                </div>
                <span className="font-semibold text-purple-500 text-xl">
                  Vs
                </span>
                <div className="">
                  <img
                    src={selectedFighters[1]?.imageUrl}
                    className="h-10 w-10 rounded-full"
                    alt="imgUrl"
                  />
                </div>
              </div>
              <div className="flex justify-center">
                <RevolvingDot
                  height="00"
                  width="500"
                  radius="6"
                  color="#4A1D96"
                  secondaryColor=""
                  ariaLabel="revolving-dot-loading"
                  wrapperStyle={{}}
                  wrapperClass=""
                  visible={true}
                />
              </div>
            </>
          )}
        </div>
        <div className="flex gap-5">
          {you.map((x) => {
            let fought;

            if (fouted.includes(x.id)) {
              fought = true;
            }
            console.log("Decide --", fought);
            return (
              <div
                key={x.id}
                onClick={() => setFighter(x)}
                className={`border-2 ${
                  fought ? "" : "cursor-pointer"
                }  border-gray-500 transition duration-300 rounded-full h-40 w-40`}
              >
                <img
                  src={x.imageUrl}
                  alt="img"
                  className={`img ${
                    fought ? "blur-sm" : "hover:scale-90"
                  }   rounded-full transition duration-300 ease-in-out`}
                />
              </div>
            );
          })}
        </div>

        <div className="flex gap-5">
          <p className="font-semibold text-purple-500">
            Adeola Oladeinde (Score):{scores}
          </p>
          <div className="flex gap-5">
            <div
              className={`border-2 bg-${yourProgress[0]}-500 border-gray-300 h-5 w-5 rounded-full`}
            ></div>
            <div
              className={`border-2 bg-${yourProgress[1]}-500 border-gray-300 h-5 w-5 rounded-full`}
            ></div>
            <div
              className={`border-2 bg-${yourProgress[2]}-500 border-gray-300 h-5 w-5 rounded-full`}
            ></div>
          </div>
        </div>
        <div className="flex gap-5">
          <button
            className="bg-gray-400 p-3 px-10 rounded-md text-white"
            onClick={() => router.push("/")}
          >
            Go Back
          </button>
          <button
            className="bg-red-500 p-3 px-10 rounded-md text-white"
            onClick={quitGame}
          >
            Quit Game
          </button>
        </div>
      </div>
    </>
  );
};

export default GamePage;
