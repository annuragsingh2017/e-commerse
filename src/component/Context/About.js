import { useContext } from "react";
import NodeContext from "./NodeContext";

const About = () => {
  const a = useContext(NodeContext);
  console.log(a)
  return <div>This is About page of </div>;
};

export default About;
