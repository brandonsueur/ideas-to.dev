import React, { Component } from "react";

export class PageAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: {
        title: "",
        content: "",
        category_id: null,
      },
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    console.log(event);

    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    console.log(event);
    event.preventDefault();
  }

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

        <form action="#" onSubmit={this.handleSubmit}>
          <div className="block">
            <label htmlFor="title">Titre de l'idée</label>
            {/* IDEA changé d'idée à chaque refresh dans le placeholder */}
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-4 py-2 mb-6 font-medium bg-gray-100 rounded-lg outline-none"
              placeholder="🏠 Contruire une maison 3D en CSS"
              value={this.state.values.title}
              onChange={this.handleChange}
              required
            />

            <label htmlFor="categories">Contenu de l'idée</label>
            <select
              name="category_id"
              id="categories"
              className="w-full px-4 py-2 mb-6 font-medium bg-gray-100 rounded-lg outline-none"
              value={this.state.values.category_id}
              onChange={this.handleChange}
            >
              <option value="1">Mobile</option>
              <option value="2">Back-end</option>
              <option value="3">Package</option>
              <option value="4">Front-End</option>
            </select>

            <label htmlFor="content">Contenu de l'idée</label>
            <textarea
              name="content"
              id="content"
              cols="30"
              rows="10"
              class="w-full px-4 py-2 font-medium bg-gray-100 rounded-lg outline-none"
              value={this.state.values.content}
              onChange={this.handleChange}
            ></textarea>
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
