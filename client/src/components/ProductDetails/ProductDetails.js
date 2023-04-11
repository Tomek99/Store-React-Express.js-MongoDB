import React, { useContext, useEffect } from "react";
import styles from "./ProductDetalis.module.scss";
import { FiPlus, FiMinus } from "react-icons/fi";
import { AiOutlineHeart } from "react-icons/ai";
import { useParams, useNavigate } from "react-router-dom";
import ClipLoader from "react-spinners/ClipLoader";
import ExtraDetails from "./ExtraDetails/ExtraDetails";
import { useState } from "react";
import { Context } from "../../Contexts/Context";
import PropTypes from "prop-types";

function ProductDetails() {
  const [quantity, setQuantity] = useState(1);
  const productId = useParams();
  const navigate = useNavigate();

  const { addItem, products, loading } = useContext(Context);

  // Protected router if the route is not exist
  useEffect(() => {
    const isIdExist = products.find((item) => {
      return item._id === productId.id;
    });

    if (!isIdExist) {
      navigate("/products");
    }
  });

  const thisProduct = products.find((item) => {
    return item._id === productId.id;
  });

  const onClickAddToBasket = () => {
    thisProduct.quantity = quantity;
    addItem(thisProduct);
  };

  const increaseAmount = () => {
    setQuantity(quantity + 1);
  };

  const decreaseAmount = () => {
    if (quantity === 1) setQuantity(1);
    else setQuantity(quantity - 1);
  };

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  return (
    <div className={styles.ProductDetails}>
      {loading ? (
        <div style={{ marginTop: "150px" }}>
          <ClipLoader color="var(--main-color" size={150} />
        </div>
      ) : (
        <>
          <div className={styles.productDetailsSection}>
            <div className={styles.productDetailsImage}>
              <img src={thisProduct.imageUrl} alt="Img" />
            </div>
            <div className={styles.productDetailsContent}>
              <h1>{thisProduct.name}</h1>
              <p>
                ${thisProduct.price}
                {thisProduct.oldPrice ? ` $${thisProduct.oldPrice}` : null}
              </p>
              <p>country of origin:{thisProduct.origin} </p>
              <p>Weight: 500g</p>
              <div className={styles.productDetailsContentButtons}>
                <div className={styles.productQuantity}>
                  <button
                    className={styles.btnProductQuantity}
                    onClick={decreaseAmount}
                  >
                    <FiMinus />
                  </button>
                  <input
                    type="text"
                    value={quantity > 1 ? quantity : quantity}
                    readOnly
                  />
                  <button
                    className={styles.btnProductQuantity}
                    onClick={increaseAmount}
                  >
                    <FiPlus />
                  </button>
                  <button
                    className={styles.btnAddToBasket}
                    onClick={onClickAddToBasket}
                  >
                    Add to basket
                  </button>
                </div>
                <button className={styles.wishList}>
                  <AiOutlineHeart /> Add to wish list
                </button>
              </div>
            </div>
          </div>
          <ExtraDetails />
        </>
      )}
    </div>
  );
}

ProductDetails.propTypes = {
  addItem: PropTypes.func,
  productData: PropTypes.array,
};
export default ProductDetails;
