import classes from "./Cart.module.css";
import { useContext, useState } from "react";
import Information from "./Information/Information";
import NodeContext from "../Context/NodeContext";

export var markup = null;

const Cart = () => {
  const [show, setShow] = useState(true);
  const a = useContext(NodeContext);
  // console.log(a);

  const infoHandler = (e) => {
    markup = e.target.value;
    console.log(markup);

    setShow(!show);
  };

  return (
    <>
      <Information />
      <div class="d-flex justify-content-center mt-5">
        <div class="card p-3 cookie">
          <span>
            We use third party cookies to personalize content, ads and analyze
            site traffic.
          </span>
          <a href="#">
            Learn more<i class="fa fa-angle-right ml-2"></i>
          </a>
          <div class="mt-4 text-right">
            <span class="mr-3 decline">Decline</span>
            <button class="btn btn-light btn-sm" type="button">
              Allow cookies
            </button>
          </div>
        </div>
      </div>
      <div className={classes.Item}>
        {a?.map((val, index) => {
          return (
            <div key={index} className="card" style={{ width: "18rem" }}>
              <div className={classes.container} style={{ width: 300 }}>
                <img
                  style={{ width: 300 }}
                  className="card-img-top"
                  src={val.image}
                />
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
                      value={val.title}
                      onClick={infoHandler}
                      type="button"
                      className="btn btn-outline-info"
                      style={{ padding: "5" }}
                    >
                      Info
                    </button>
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
export default Cart;
