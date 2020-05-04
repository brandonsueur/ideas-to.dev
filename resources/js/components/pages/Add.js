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

      errors: {
        title: '',
        content: '',
        category: ''
      }
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>

        <form action="#" onSubmit={this.handleSubmit}>
          <div className="block">
            <label htmlFor="title">Titre de l'idée</label>
            <input
              type="text"
              id="title"
              name="title"
              className="w-full px-4 py-2 mb-6 font-medium bg-gray-100 rounded-lg outline-none"
              required
            />

            <label htmlFor="categories">Contenu de l'idée</label>
            <select
              name="category_id"
              id="categories"
              className="w-full px-4 py-2 mb-6 font-medium bg-gray-100 rounded-lg outline-none"
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
              className="w-full px-4 py-2 font-medium bg-gray-100 rounded-lg outline-none"
            />
          </div>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
