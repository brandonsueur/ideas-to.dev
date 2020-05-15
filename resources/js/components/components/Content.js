import React from "react";
import ReactMarkdown from "react-markdown";

import { Link } from "wouter";
import { colorCategory, emojiCategory } from "../../utils/index";
import confetti from "canvas-confetti";

import axios from "../../utils/api";

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      data: null,
      countLikes: null,
      isLoading: false
    };

    console.log({ props });
    this.click = this.click.bind(this);
  }

  componentDidMount() {
    this.setState({ isLoading: true });

    const { likes_count } = this.props.idea;

    this.setState({ countLikes: likes_count });
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
    let { idea } = this.props;

    return (
      <div data-id={idea.id}>
        {/* header */}
        <div className="flex items-center justify-between mt-24 mb-10">
          <Link href="/">
            <a>🚶🏻‍♂️ Retour</a>
          </Link>
        </div>

        {/* content */}
        <div
          className={`py-6 px-6 rounded-lg ${colorCategory(
            idea.category.name
          )}`}
        >
          <div className="mb-5 -mt-12">
            <span className="mr-5 text-3xl">
              {emojiCategory(idea.category.name)}
            </span>
          </div>

          <h1 className="text-2xl font-semibold">{idea.title}</h1>

          <div className="mt-12 mb-5">
            <ReactMarkdown className="content" source={idea.content} />
          </div>
        </div>

        {/* like */}
        <div
          className={`flex container pl-6 h-32 rounded-lg my-8  ${colorCategory(
            idea.category.name
          )} `}
        >
          <div className="flex w-5/6">
            <div className="self-center w-5/6">
              <h3 className="text-xl leading-none">
                <strong className="count-like">{this.state.countLikes}</strong>{" "}
                personnes ont aimé cette idée !
              </h3>
            </div>
          </div>

          <div className="flex w-1/6">
            <div className="flex self-center justify-center w-full text-center">
              <a
                onClick={e => this.click(e)}
                className="px-5 py-4 bg-white rounded-lg text-2xl shadow-lg hover:shadow-xl like"
                href="#"
              >
                👌
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Content;
