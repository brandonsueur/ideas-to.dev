import React from "react";
import Link from "next/link";

const Header = () => (
  <header className="flex justify-between w-full items-center my-10">
    <h1 className="font-semibold font-sans top-auto">
      <Link href="/">ideas-to.dev</Link>
    </h1>

    <nav>
      <ul className="list-reset text-sm font-medium flex">
        <li className="mr-6 hover:text-accent no-underline">
          <Link href="/ideas">Idées</Link>
        </li>

        <li className="hover:text-accent no-underline mr-6">
          <Link href="/roadmap">Feuille de routes</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
