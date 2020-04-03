import React, { Component } from "react";

export class PageAdd extends Component {
  render() {
    return (
      <div>
        <h1 className="mb-5 text-2xl font-semibold">Ajoute ton idée</h1>
        <p className="w-2/3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Excepturi
          molestiae in velit, asperiores assumenda distinctio dolore aut
          architecto similique quae eos dolorem ducimus, enim facilis quidem
          libero corrupti odit iusto.
        </p>

        <form action="#">
          <div className="block">
            <label htmlFor="title">Titre de l'idée</label>
            {/* IDEA changé d'idée à chaque refresh dans le placeholder */}
          </div>
          <div className="block">
            <label htmlFor="title">Titre de l'idée</label>

            <div className="inline-block w-auto px-4 py-2 bg-gray-200 rounded-lg">
              <span>🎨</span>
              <span className="ml-2">front-end</span>
            </div>

            <label htmlFor="title">Titre de l'idée</label>
            {/* IDEA changé d'idée à chaque refresh dans le placeholder */}
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-4 py-2 font-medium bg-gray-200 rounded-lg outline-none"
              placeholder="🏠 Contruire une maison 3D en CSS"
              required
            />
          </div>

          {/* title */}
          {/* content */}
          {/* category */}
        </form>
      </div>
    );
  }
}
