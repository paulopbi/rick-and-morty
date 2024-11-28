import { useEffect } from "react";

const Head = (props) => {
  useEffect(() => {
    document.title = props.title + " | Rick And Morty";
    document
      .querySelector("meta[name='description']")
      .setAttribute("content", props.description || "");
  }, [props]);
};

export default Head;
