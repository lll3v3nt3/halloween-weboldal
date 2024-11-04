"use client";

import React, { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Link from "next/link";

const HalloweenGame = () => {
  const [position, setPosition] = useState({ top: 50, left: 50 });
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isGameActive, setIsGameActive] = useState(false);

  // Véletlenszerű helyzet generálása a tök számára az egész képernyőn
  const generateRandomPosition = () => {
    const top = Math.floor(Math.random() * (window.innerHeight - 100)) + 50;
    const left = Math.floor(Math.random() * (window.innerWidth - 100)) + 50;
    setPosition({ top, left });
  };

  // Játék indítása
  const startGame = () => {
    setScore(0);
    setTimeLeft(30);
    setIsGameActive(true);
    generateRandomPosition();
  };

  // Tökre kattintás (pontszerzés)
  const handlePumpkinClick = () => {
    if (isGameActive) {
      setScore(score + 1);
      generateRandomPosition();
    }
  };

  // Időzítő kezelése
  useEffect(() => {
    if (isGameActive && timeLeft > 0) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      setIsGameActive(false);
    }
  }, [isGameActive, timeLeft]);

  return (
    <div className="p-10 flex justify-center items-center min-h-screen bg-white text-black relative">
      {!isGameActive && (
        <Card className="w-full max-w-md p-8 space-y-6 bg-gray-100 text-center rounded-lg shadow-lg border border-gray-300">
          <h2 className="text-2xl font-bold text-black">Halloween-i mini játék</h2>
          <p className="text-gray-700">Pontszám: {score}</p>
          <p className="text-gray-700">Hátralévő idő: {timeLeft} másodperc</p>

          <div className="flex justify-center space-x-4">
            <Button className="bg-black text-white px-4 py-2" onClick={startGame}>
              Játék indítása!
            </Button>
            <Link href="/">
              <Button className="bg-gray-300 text-black hover:bg-gray-200 px-4 py-2">
                Vissza a főoldalra
              </Button>
            </Link>
          </div>
        </Card>
      )}
      {isGameActive && (
        <>
          {/* Nagy méretű visszaszámláló a képernyő közepén, fölötte */}
          <div className="absolute inset-0 flex justify-center items-center text-black text-6xl font-bold pointer-events-none z-10">
            {timeLeft}
          </div>
          {/* Tök ikon az egész képernyőn */}
          <div
            onClick={handlePumpkinClick}
            style={{
              position: 'fixed',
              top: `${position.top}px`,
              left: `${position.left}px`,
              transform: 'translate(-50%, -50%)',
            }}
            className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-lg font-bold cursor-pointer z-5"
          >
            🎃
          </div>
        </>
      )}
    </div>
  );
};

export default HalloweenGame;
