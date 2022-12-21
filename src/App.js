import "./App.css";
import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import ProductData from "./data/product.json";

import {
  Home,
  Articles,
  Products,
  Menu,
  Reviews,
  AboutUs,
} from "./pages/index";

import {
  NavigationBar,
  ContactSection,
  Footer,
  AboutCs,
  FAQ,
  OurTeam,
  ProductDetails,
} from "./components/index";

function App() {
  const [basketItems, setBasketItem] = useState([]);
  const [basketPrice, setBasketPrice] = useState({ currentPrice: 0, save: 0 });

  const addItem = (item) => {
    if (isRepeat(item.idProduct)) setBasketItem([...basketItems, item]);

    setBasketPrice((prevPrice) => ({
      ...prevPrice,
      currentPrice:
        Math.round((prevPrice.currentPrice + item.newPrice) * 100) / 100,
      save:
        Math.round((prevPrice.save + (item.oldPrice - item.newPrice)) * 100) /
        100,
    }));
  };

  const deleteItem = (id, newPrice, oldPrice) => {
    const basketList = basketItems.filter((item) => item.idProduct !== id);
    const findItem = basketItems.filter((item) => item.idProduct === id);

    setBasketItem(basketList);

    setBasketPrice((prevPrice) => ({
      ...prevPrice,
      currentPrice:
        Math.round(
          (prevPrice.currentPrice - newPrice * findItem[0].quantity) * 100
        ) / 100,
      save:
        Math.round(
          (prevPrice.save - (oldPrice - newPrice) * findItem[0].quantity) * 100
        ) / 100,
    }));
  };

  const isRepeat = (idProduct) => {
    for (let i = 0; i < basketItems.length; i++) {
      if (basketItems[i].idProduct === idProduct) {
        basketItems[i].quantity += 1;
        return false;
      }
    }
    return true;
  };

  return (
    <section className="columnWeb">
      <NavigationBar
        basketItems={basketItems}
        deleteItem={deleteItem}
        basketPrice={basketPrice}
      />
      <Routes>
        <Route
          path="/"
          element={
            <Home
              addItem={addItem}
              basketItems={basketItems}
              basketPrice={basketPrice}
              productData={ProductData}
            />
          }
        />
        <Route path="about-us" element={<AboutUs />}>
          <Route path="about-coffee-shop" element={<AboutCs />} />
          <Route path="our-team" element={<OurTeam />} />
          <Route path="faq" element={<FAQ />} />
          <Route path="*" element={<AboutCs />} />
        </Route>
        <Route path="menu" element={<Menu addItem={addItem} />} />
        <Route
          path="products/"
          element={<Products addItem={addItem} />}
        ></Route>
        <Route
          path="products/:id"
          element={<ProductDetails productData={ProductData} />}
        />
        <Route path="reviews" element={<Reviews />} />
        <Route path="contact" element={<ContactSection />} />
        <Route path="articles" element={<Articles />} />
        <Route path="blog" element={<Articles />} />
      </Routes>

      <Footer />
    </section>
  );
}

export default App;
