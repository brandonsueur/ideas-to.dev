import React from "react";
import { Link } from "wouter";

const Header = () => (
  <header className="flex justify-between items-center my-12">
    <h1 className="font-bold top-auto">
      <Link className="navbar-brand" to="/">
        ideas-to.dev
      </Link>
    </h1>

    <nav>
      <ul className="list-reset | text-sm font-medium | flex">
        <li>
          <Link to="/ideas" className="mr-6 hover:text-accent no-underline">
            💡Ideas
          </Link>
        </li>

        <li>
          <Link to="/roadmap" className="hover:text-accent no-underline mr-6">
            🎢 Roadmap
          </Link>
        </li>

        <li>
          <a
            href="/add"
            className="add-idea text-white rounded-lg px-4 py-3 no-underline bg-cta hover:shadow-lg"
          >
            🚀 I have an idea !
          </a>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
