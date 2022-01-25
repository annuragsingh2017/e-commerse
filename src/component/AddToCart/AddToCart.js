import { add } from "../cart/Information/Information";
import NodeContext from "../Context/NodeContext";
import { useContext, useState, useEffect } from "react";

const added = [];
const AddToCart = () => {
  const [state, setState] = useState([]);
  const a = useContext(NodeContext);
  // const newAdd=new Array(add)
  // console.log(newAdd)
  useEffect(() => {
    setState([...state, add]);
  }, [add]);

  console.log(state?.shift());
  // const task=added.push(add)
  // console.log(task)
  console.log(add, state);
  return <p>fdasdsf</p>;
};
export default AddToCart;
