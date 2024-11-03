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

  // Véletlenszerű helyzet generálása a tök számára
  const generateRandomPosition = () => {
    const top = Math.floor(Math.random() * 80) + 10;
    const left = Math.floor(Math.random() * 80) + 10;
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
    <div className="p-10 flex justify-center items-start min-h-screen bg-white text-black">
      <Card className="w-full max-w-md p-8 space-y-6 bg-gray-100 text-center rounded-lg shadow-lg border border-gray-300">
        <h2 className="text-2xl font-bold text-black">Halloween-i mini játék</h2>
        <p className="text-gray-700">Pontszám: {score}</p>
        <p className="text-gray-700">Hátralévő idő: {timeLeft} másodperc</p>

        {!isGameActive ? (
          <div className="space-y-4">
            <Button className="bg-black text-white px-4 py-2" onClick={startGame}>
              Újra játszom!
            </Button>
            <Link href="/">
              <Button className="bg-gray-300 text-black hover:bg-gray-200 px-4 py-2">
                Vissza a főoldalra
              </Button>
            </Link>
          </div>
        ) : (
          <div
            onClick={handlePumpkinClick}
            style={{
              position: 'absolute',
              top: `${position.top}%`,
              left: `${position.left}%`,
              transform: 'translate(-50%, -50%)',
            }}
            className="w-16 h-16 bg-black rounded-full flex items-center justify-center text-white text-lg font-bold cursor-pointer"
          >
            🎃
          </div>
        )}
      </Card>
    </div>
  );
};

export default HalloweenGame;
