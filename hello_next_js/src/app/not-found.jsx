import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-5">
      <h2>404 | Your Page is not Found</h2>
      <Link href={"/"} className="underline">
        GO TO HOME
      </Link>
    </div>
  );
};

export default NotFound;
