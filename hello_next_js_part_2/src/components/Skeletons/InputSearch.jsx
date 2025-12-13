"use client";

import { useSearchParams } from "next/navigation";
import { useRouter } from "next/router";
import React from "react";

const InputSearch = () => {
  //   const router = useRouter();

  const params = useSearchParams();
  console.log(params.toString());

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;
    const value = form.search.value;

    const newParams = new URLSearchParams(params.toString());

    newParams.set("search", value);

    router.push(`?${newParam.toString()}`);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          className="px-1 py-3 border-2 rounded max-w-2xl"
          type="text"
          placeholder="Enter FOod Name"
        />
        <button className="px-4 py-2 bg-yellow-500 text-black rounded cursor-pointer">
          Search
        </button>
      </form>
    </div>
  );
};

export default InputSearch;
