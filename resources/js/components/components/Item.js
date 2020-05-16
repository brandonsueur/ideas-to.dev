import React, { Component } from "react";
import { Link } from "wouter";

import axios from "../../utils/api";

import { colorCategory, emojiCategory } from "../../utils/index";
import confetti from "canvas-confetti";

export default class Item extends Component {
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
        }

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
              people liked this idea!
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
