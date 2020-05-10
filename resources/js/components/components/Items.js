import React, { Component } from "react";
import { Link } from "wouter";

import axios from "../../utils/api";

import { colorCategory, emojiCategory } from "../../utils/index";
import confetti from "canvas-confetti";

class Item extends Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      countLikes: null,
      isLoading: false
    };

    this.click = this.click.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    const { countLikes } = this.props.idea;

    this.setState({ countLikes });
  }

  async getCategory() {
    let res = await axios.get(`ideas/${this.props.params.id}`);
    let { data } = await res.data;

    this.setState({
      idea: data,
      loading: false
    });
  }

  click(e) {
    e.preventDefault();

    const { id } = this.props.idea;

    axios
      .post("/likes", { idea_id: id })
      .then(response => {
        if (response.status === 401) {
          return this.setState({
            countLikes: response.data.countLikes
          });
        } else {
          confetti({
            particleCount: 60,
            spread: 100,
            origin: { y: 1.2 }
          });

          this.setState({
            countLikes: response.data.countLikes,
            data: response.data,
            isLoading: false
          });
        }
      })
      .catch(error => console.log(error.response));
  }

  render() {
    const { countLikes } = this.state;
    const { idea, visible } = this.props;

    return (
      <div
        data-id={idea.id}
        data-category={idea.category.name}
        className={`flex container h-32 rounded-lg my-8 ${colorCategory(
          idea.category.name
        )} ${!visible && "hidden"}`}
      >
        <div className="w-5/6 flex">
          <div className="w-1/6 justify-center text-center flex self-center">
            <a className="text-3xl" href="#">
              {emojiCategory(idea.category.name)}
            </a>
          </div>

          <div className="w-5/6 self-center">
            <Link href={`/ideas/${idea.id}`}>
              <h1 className="font-semibold text-2xl mb-2 cursor-pointer">
                {idea.title}
              </h1>
            </Link>

            <p className="leading-none">
              <strong className="count-like">
                {!this.state.isLoading ? countLikes : idea.likes_count}
              </strong>{" "}
              personnes ont aimé cette idée !
            </p>
          </div>
        </div>

        <div className="w-1/6 flex">
          <div className="justify-center text-center flex self-center w-full">
            <a
              onClick={e => this.click(e)}
              disabled={this.state.isLoading}
              className="px-5 py-4 bg-white rounded-lg text-2xl shadow-lg hover:shadow-xl like"
              href="#"
            >
              👌
            </a>
          </div>
        </div>
      </div>
    );
  }
}

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
        {!loading ? (
          <p>{countIdeas == null ? ideas.length : countIdeas} idées trouvées</p>
        ) : (
          ""
        )}

        <ul className="flex list-reset | mt-16 mb-16">
          {categories &&
            categories.length > 0 &&
            categories.map(category => {
              return (
                <li
                  key={category.id}
                  className={category.ideas_count > 0 ? "d-block" : "hidden"}
                >
                  <a
                    onClick={e => this.filter(category)}
                    className={`m-1 py-3 px-3 cursor-pointer rounded-lg d-block ${
                      category.name === categorySelected
                        ? "bg-bluedark text-white"
                        : colorCategory(category.name)
                    } font-medium text-base`}
                  >
                    {emojiCategory(category.name)} {category.name}
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

        {!loading ? (
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
          })
        ) : (
          <p className="text-center py-8">Chargement ... 🔎</p>
        )}
      </div>
    );
  }
}

export default Items;
