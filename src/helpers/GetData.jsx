import { useEffect, useState } from "react";
import axios from "axios";

const tags = [
  "C++ BASICS",
  "C++ STL",
  "MATH FOR BEGINNERS",
  "CODEFORCES PROBLEM A GRIND",
  "GREEDY ALGORITHMS",
  "RECURSION AND BACKTRACKING",
  "BIT MANIPULATION",
  "PREFIX SUMS AND DIFFERENCE ARRAY",
  "CONSTRUCTIVE ALGORITHMS",
  "CODEFORCES PROBLEM B GRIND",
  "BINARY SEARCH",
  "TWO POINTERS",
  "NUMBER THEORY",
  "CODEFORCES PROBLEM C GRIND",
  "INTERACTIVE PROBLEMS",
  "DP",
  "GRAPHS",
  "DSU",
  "SEGMENT TREES AND LAZY PROPAGATION",
  "CODEFORCES PROBLEM D GRIND",
  "NON-STANDARD DP PROBLEMS",
  "NON-STANDARD GRAPH PROBLEMS",
  "ADVANCED NUMBER THEORY",
  "COMBINATORICS AND PROBABILITY",
  "STRING ADVANCED ALGORITHM",
  "GAME THEORY BASIC TO ADVANCED",
  "CODEFORCES PROBLEM E GRIND",
];
const GetData = () => {
  const [allData, setAllData] = useState();

  useEffect(() => {
    const fetchData = async (tag) => {
      const response = await axios.get(`/questions/${tag}`);
      setAllData(response.data);
    };
    tags.map((tag) => {
      fetchData(tag);
    });
  }, [allData]);

  return <div>GetData</div>;
};

export default GetData;
