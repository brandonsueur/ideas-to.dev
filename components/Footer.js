import React from "react";

const Footer = () => (
  <div class="border-t border-gray-200 pt-8 lg:flex lg:items-center lg:justify-between xl:mt-16 mb-16">
    <div>
      <h3 class="tracking-wider  mt-4 font-bold  font-sans top-auto">
        ideas-to.dev
      </h3>
      <p class="mt-4 text-md text-gray-500 max-w-sm">
        Vous manquez d'inspiration pour apprendre à développer ? Récupérer des
        idées, améliorez-les et codez ! La meilleure façon de progresser.
      </p>

      <p className="mt-4 text-md text-gray-500">
        {new Date().getFullYear()} © ideas-to.dev
      </p>
    </div>
  </div>
);

export default Footer;
