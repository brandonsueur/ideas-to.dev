import React, { Component } from "react";

const Repository = () => (
  <div className="container flex h-32 my-8 bg-blue-100 rounded-lg">
    <div className="flex w-5/6">
      <div className="flex self-center justify-center w-1/6 ml-4 text-center">
        <img
          className="rounded-lg"
          src="https://avatars1.githubusercontent.com/u/13354466?s=460&v=4"
        />
      </div>

      <div className="self-center w-5/6 ml-6">
        <h1 className="mb-4 text-lg font-bold">brandonsueur/form-builder</h1>
        <time className="font-light">
          🕑 mardi 29 décembre 2020 ・ 🧔🏻 Par <b>Brandon Sueur</b>
        </time>
      </div>
    </div>

    <div className="flex w-1/6">
      <div className="flex self-center justify-center w-full text-center">
        <a
          className="px-5 py-4 text-2xl bg-white rounded-lg shadow-lg hover:shadow-xl"
          href="#"
        >
          🕶
        </a>
      </div>
    </div>
  </div>
);

export default Repository;
