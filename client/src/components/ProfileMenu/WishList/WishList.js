import React, { useEffect } from "react";
import styles from "./WishList.module.scss";
import WishFilter from "./WishFilter/WishFilter";
import WishInfo from "./WishInfo/WishInfo";
import WishProducts from "./WishProducts/WishProducts";
import Support from "../Support/Support";
// import { useContext } from "react";
// import { Context } from "../../../Contexts/Context";

function WishList() {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, []);
  // const { addItemWishList } = useContext(Context);
  return (
    <>
      <div className={styles.WishListHeader}>
        <header className={styles.headline}>Shopping lists</header>
        <button className={styles.btnAddList}>+ Add list</button>
      </div>
      <WishFilter />
      <div className={styles.WishListProducts}>
        <WishProducts />
        <WishProducts />
      </div>
      <WishInfo />
      <Support />
    </>
  );
}

export default WishList;