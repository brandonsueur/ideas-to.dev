import React from "react";

const Banner = () => (
  <div className="flex justify-between items-center p-12 rounded-lg bg-primary mb-16">
    <div className="container">
      <h1 className="font-bold text-3xl">
        Project ideas for learn <br />
        development! 🎉
      </h1>

      <p className="py-8 mb-5">
        Many people do not know what to do as a project to learn, start or show
        their skills.
      </p>

      <a
        className="button px-4 py-3 rounded-lg text-white font-medium hover:shadow-lg"
        href="/ideas"
      >
        💡All ideas
      </a>
    </div>
  </div>
);

export default Banner;
