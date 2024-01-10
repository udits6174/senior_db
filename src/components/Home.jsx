import tags from "../assets/tags";
import "./home.css";
import { useState } from "react";
import TopicProblemsList from "./TopicProblemsList";

const Home = () => {
  const [currentTag, setCurrentTag] = useState(null);

  const HandleClick = (tagValue) => {
    setCurrentTag(tagValue);
  };

  return (
    <div>
      <div className="buttons">
        {tags.map((tag, index) => {
          return (
            <button onClick={() => HandleClick(tag)} key={index}>
              {tag}
            </button>
          );
        })}
      </div>
      <div className="cards">
        <h1>{currentTag}</h1>
        {currentTag && <TopicProblemsList tag={currentTag} />}
      </div>
    </div>
  );
};

export default Home;
