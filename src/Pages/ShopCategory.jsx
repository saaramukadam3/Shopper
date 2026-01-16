import React, { useContext } from "react";
import "./CSS/ShopCategory.css";
import { ShopContext } from "../Context/ShopContext";
import Item from "../Components/Item/Item";
import { useNavigate } from "react-router-dom";

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const navigate=useNavigate();
  return (
    <div className="shop-category">
      <img className="shopcategory-banner" src={props.banner} alt="" />

      <div className="shopcategory-indexSort">
        <p>
          <span>
            Showing 1-
            {
              all_product.filter(
                (item) => item.category === props.category
              ).length
            }
          </span>{" "}
          products
        </p>
      </div>

      <div className="shopcategory-product">
        {all_product
          .filter((item) => item.category === props.category)
          .map((item) => (
            <Item
              key={item.id}
              id={item.id}
              name={item.name}
              category={item.category}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          ))}
      </div>

      <div className="shopcategory-loadmore">
      <button onClick={() => navigate("")}> Explore More </button>
      </div>
    </div>
  );
};

export default ShopCategory;
