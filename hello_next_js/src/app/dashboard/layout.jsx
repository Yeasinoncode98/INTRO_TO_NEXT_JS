import Link from "next/link";
import React from "react";

const DashboardLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 gap-5 min-h-screen">
      <div className="col-span-3 border-r-2">
        <Link href="/" className="text-lg font-semibold">
          Dev-Story
        </Link>

        <div className="flex flex-col gap-5 mt-10">
          <Link
            className="py-2 px-4 w-full bg-gray-500 mx-4"
            href={"/dashboard/add-story"}
          >
            Add Story
          </Link>
          <Link
            className="py-2 px-4 w-full bg-gray-500 mx-4"
            href={"/dashboard/my-profile"}
          >
            My profile
          </Link>
          <Link
            className="py-2 px-4 w-full bg-gray-500 mx-4"
            href={"/dashboard/settings"}
          >
            Settings
          </Link>
        </div>
      </div>
      <div className="col-span-9">{children}</div>
    </div>
  );
};

export default DashboardLayout;
