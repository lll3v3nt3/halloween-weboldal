'use client'

import React, { useEffect, useState } from 'react';
import { Card } from "@/components/ui/card";

const HalloweenCountdown = () => {
  const calculateTimeLeft = () => {
    const currentYear = new Date().getFullYear();
    const halloweenDate = new Date(`October 31, ${currentYear} 23:59:59`);
    const now = new Date();

    if (now > halloweenDate) {
      halloweenDate.setFullYear(currentYear + 1);
    }

    const difference = halloweenDate.getTime() - now.getTime();

    return {
      days: Math.floor(difference / (1000 * 60 * 60 * 24)),
      hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((difference / 1000 / 60) % 60),
      seconds: Math.floor((difference / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex justify-center items-center bg-white" style={{ marginTop: '10px', marginBottom: '120px'}}> {/* Kis felső margó */}
      <Card className="p-6 bg-white rounded-lg shadow-lg text-center">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Visszaszámlálás Halloweenig</h1>
        <div className="flex justify-center gap-8 text-gray-700">
          <div>
            <span className="text-5xl font-bold">{timeLeft.days}</span>
            <div className="text-lg">nap</div>
          </div>
          <div>
            <span className="text-5xl font-bold">{timeLeft.hours}</span>
            <div className="text-lg">óra</div>
          </div>
          <div>
            <span className="text-5xl font-bold">{timeLeft.minutes}</span>
            <div className="text-lg">perc</div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default HalloweenCountdown;
