import { createElement } from "react";

/**
 * Title
 * @param {string} type
 * @param {JSX.Element} children
 * @example <Title>Mon super titre</Title>
 */
const Title = ({ type, children, className, ...restProps }) => {
  const els = {
    h1: {
      el: "h1",
      classes: "3xl",
    },
    h2: {
      el: "h2",
      classes: "2xl",
    },
    h3: {
      el: "h3",
      classes: "xl",
    },
    h4: {
      el: "h4",
      classes: "lg",
    },
    h5: {
      el: "h5",
      classes: "base",
    },
    h6: {
      el: "h6",
      classes: "sm",
    },
  };

  const element = els[type || "h1"];

  return createElement(
    element.el,
    {
      className: `font-bold text-${element.classes || "3xl"} max-w-xl ${
        className || ""
      }`,
      ...restProps,
    },
    children
  );
};

export default Title;
