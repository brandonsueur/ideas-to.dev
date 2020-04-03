import React from 'react';

const Banner = () => (
  <div className="flex justify-between items-center p-12 rounded-lg bg-primary mb-16">
    <div className="container">
      <h1 className="font-bold text-3xl">Des idées de projets à concevoir pour<br />apprendre le développement ! 🎉</h1>

      <p className="py-8 mb-5">Nombreuses personnes ne savent pas quoi faire comme projet pour apprendre, débuter ou encore montrer leurs compétences.</p>

      <a className="button px-8 py-4 rounded-lg text-white font-medium hover:shadow-lg" href="">🔎 En savoir plus</a>
    </div>
  </div>
)

export default Banner
