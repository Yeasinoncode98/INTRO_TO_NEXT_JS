import Link from "next/link";
import React from "react";

const loading = () => {
  return (
    <div>
      <div className="min-h-screen flex justify-center items-center text-8xl">
        <h2>L</h2> <span className="animate-spin">(0000)</span>
        <h2>OADING</h2>
        STORIES
      </div>
    </div>
  );
};

export default loading;
