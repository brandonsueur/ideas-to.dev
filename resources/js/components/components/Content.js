import React from "react";
import ReactMarkdown from "react-markdown";

import { Link } from "wouter";
import { colorCategory, emojiCategory } from "../../utils/index";

class Content extends React.Component {
  render() {
    let { idea } = this.props;

    console.log(idea);
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
          )} mb-10`}
        >
          <div className="mb-5 -mt-12">
            <span className="mr-5 text-3xl">
              {emojiCategory(idea.category.name)}
            </span>
          </div>

          <h1 className="text-2xl font-semibold">{idea.title}</h1>

          <div className="mt-12 mb-12">
            <ReactMarkdown className="content" source={idea.content} />
          </div>

          <time className="font-light">
            🕑 mardi 29 décembre 2020 ・ 🧔🏻 Par <b>Brandon Sueur</b>
          </time>
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
                <strong className="count-like">{idea.likes_count}</strong>{" "}
                personnes ont aimé cette idée !
              </h3>
            </div>
          </div>

          <div className="flex w-1/6">
            <div className="flex self-center justify-center w-full text-center">
              <a
                onClick={e => this.click(e)}
                className="px-5 py-4 text-2xl bg-white rounded-lg shadow-lg hover:shadow-xl like"
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
