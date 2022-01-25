import { markup } from "../Cart";
import classes from "./Information.module.css";
import NodeContext from "../../Context/NodeContext";
import { useContext, useState } from "react";
import AddToCart from "../../AddToCart/AddToCart";

export var add = null;
const Information = () => {
  const [show, setShow] = useState(true);
  const a = useContext(NodeContext);
  const newMarkup = new Array(markup);

  const filtered = a.filter((val) => val.title === newMarkup[0]);

  const AddToCartHandler = (e) => {
    add = e.target.value;
    console.log(add);
    setShow(false);
  };

  return (
    <>
      <AddToCart />
      <div
        className={""}
        style={{
          paddingTop: 5,
          paddingRight: 30,
          paddingBottom: 50,
          paddingLeft: 500,
        }}
      >
        {filtered?.map((val, index) => {
          return (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <div className={classes.container} style={{ width: 300 }}>
                <img className="card-img-top" src={val.image} />
                <div></div>
                <div
                  className={classes.infocol}
                  style={{ width: 300, textAlign: "center" }}
                >
                  <div>
                    <span>{val.category}</span>
                  </div>
                  <div>
                    <span>Price: ${val.price} </span>
                  </div>
                  <div>
                    <span>Rating: {val.rating.rate} ⭐</span>
                    <button
                      value={val.id}
                      type="button"
                      className="btn btn-outline-info"
                      style={{ padding: "5" }}
                      onClick={AddToCartHandler}
                    >
                      AddToCart
                    </button>
                  </div>
                  <div
                    className="overflow"
                    style={{
                      whiteSpace: "nowrap",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                    }}
                  >
                    <span>
                      <strong>Description</strong>: {val.description}{" "}
                    </span>
                  </div>
                  <div>
                    <span>Category: {val.category} </span>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Information;
