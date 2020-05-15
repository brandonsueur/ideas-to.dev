import React, { Component } from "react";

import axios from "../../utils/api";
import Item from "./Item";

import { colorCategory, emojiCategory } from "../../utils/index";

class Items extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      ideas: null,
      countIdeas: null,
      categories: null,
      categorySelected: null
    };
  }

  componentDidMount() {
    this.getCategories();
    this.getIdeas();
  }

  async getCategories() {
    let res = await axios.get("/categories");
    let { data } = await res.data;

    this.setState({ categories: data });
  }

  async getIdeas() {
    let res = await axios.get("/ideas");
    let { data } = await res.data;

    this.setState({
      ideas: data,
      loading: false
    });
  }

  filter(category) {
    const { name, ideas_count } = category;

    this.setState({
      categorySelected: name,
      countIdeas: ideas_count
    });
  }

  render() {
    const {
      loading,
      ideas,
      countIdeas,
      categories,
      categorySelected
    } = this.state;

    return (
      <div>
        <h2 className="text-2xl font-bold">Liste des idées non exhaustifs</h2>

        {!loading && (
          <p>{countIdeas == null ? ideas.length : countIdeas} idées trouvées</p>
        )}

        <ul className="list-reset | mt-16 mb-16">
          {categories &&
            categories.length > 0 &&
            categories.map(category => {
              return (
                <li
                  key={category.id}
                  className={
                    category.ideas_count > 0
                      ? "d-inline inline-block"
                      : "hidden"
                  }
                >
                  <a
                    onClick={e => this.filter(category)}
                    className={`block m-1 py-3 px-3 cursor-pointer rounded-lg ${
                      category.name === categorySelected
                        ? "bg-bluedark text-white"
                        : colorCategory(category.name)
                    } font-medium text-base`}
                  >
                    <span className={`d-inline mr-2`}>
                      {emojiCategory(category.name)}
                    </span>

                    <span className={`d-inline`}>{category.name}</span>

                    <span
                      className={`ml-3 text-xs bg-white p-1 ${
                        category.name === categorySelected
                          ? "bg-purple-100 text-bluedark"
                          : "bg-white"
                      } px-3 rounded-full`}
                    >
                      {category.ideas_count}
                    </span>
                  </a>
                </li>
              );
            })}
        </ul>

        {!loading &&
          ideas &&
          ideas.length > 0 &&
          ideas.map(idea => {
            return (
              <Item
                idea={idea}
                key={idea.id}
                visible={
                  idea.category.name === categorySelected ||
                  categorySelected == null
                }
              />
            );
          })}
      </div>
    );
  }
}

export default Items;
