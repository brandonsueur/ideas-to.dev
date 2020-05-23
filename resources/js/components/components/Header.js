import React from "react";
import { Link, Redirect } from "wouter";

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
            target="_blank"
            href="https://github.com/ideas-to-dev/ideas-to.dev"
            style={{ marginRight: "20px" }}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Octicons-mark-github.svg/1200px-Octicons-mark-github.svg.png"
              alt="GitHub"
              style={{ display: "inline-block", marginRight: "7px" }}
              width="15"
            />
            GitHub
          </a>
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
