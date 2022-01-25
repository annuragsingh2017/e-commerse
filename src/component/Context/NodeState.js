import { useEffect, useState } from "react";
import NodeContext from "./NodeContext";

const NodeState = (props) => {
  const [data, setData] = useState([]);

  const state = { name: "Anurag", class: "B-tech" };
  
  const fetchdata = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    setData(await response.json());
   
  };
  useEffect(()=>fetchdata(),[])
  console.log(data)
  return (
    <NodeContext.Provider value={data}>{props.children}</NodeContext.Provider>
  );
};
export default NodeState;
