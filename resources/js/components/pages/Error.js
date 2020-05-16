import React from "react";
import { Link } from "wouter";

export const PageError = () => (
  <div className="text-center my-32">
    <h1 className="font-black text-4xl">Oops ! 🥺</h1>
    <p className="py-3">
      You are currently on a page that does not hesitate or more.
    </p>

    <Link to="/" className="text-green-400">
      Return to home
    </Link>
  </div>
);
