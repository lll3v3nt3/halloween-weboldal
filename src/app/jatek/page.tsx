"use client";

import React from 'react';
import HalloweenGame from '@/components/HalloweenGame';

export default function HomePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white text-white">
      <HalloweenGame />
    </div>
  );
}
