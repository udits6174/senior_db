import { useEffect, useState } from "react";
import axios from "axios";
import Card from './Card'

const TopicProblemsList = ({tag}) => {
  const [problems, setProblems] = useState([]);

  useEffect(() => {
    const fetchData = async (tag) => {
      //https://cors-anywhere.herokuapp.com/
      const response = await axios.get(`https://ask-senior-server.vercel.app/questions/${tag}`);
      setProblems(response.data);
    };
      fetchData(tag);
  }, [tag]);

  return (
    <>
        {problems && problems.map((ele) => {
        return <Card cardTag={ele} key={ele._id} />
      })}
    </>
  )
}

export default TopicProblemsList