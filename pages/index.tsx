import ShopDisplay from "../components/Buyer/ShopDisplay";
import Navbar from "../components/Navbar";
import styles from "/styles/ShopDisplay.module.css";
import Image from "next/image";
import leftArrow from "/public/left-arrow.png";
import rightArrow from "/public/right-arrow.png";

import ShopItem from "../components/Buyer/ShopItem";
import ShopLayout from "../components/layouts/ShopLayout";
import ShopCart from "../components/ShopCart";

import { isCartOpen } from "../helper/CartStore";
import { useStore } from "@nanostores/react";
import { useEffect, useState } from "react";
import { PRODUCT } from "@prisma/client";
import { ProductRespond } from "./api/products";

function Home() {
  const [page, setPage] = useState<number>(0);
  const [products, setProducts] = useState<ProductRespond[]>([]);

  const fetchProduct = async (pageFetch: number = 0) => {
    const rawResponse = await fetch(`/api/products`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ page: pageFetch }),
    });
    try {
      const json = await rawResponse.json();
      console.log(json);
      return json;
    } catch (error) {}
    return null;
  };

  useEffect(() => {
    const productFetch = fetchProduct();
    productFetch.then((data) => {
      if (data) {
        setProducts(data);
      }
    });
  }, []);

  const pageChange = (increase: boolean = true) => {
    if (!increase && page <= 0) {
      return;
    }
    setProducts([]);
    setPage(page + (increase ? 1 : -1));
    fetchProduct(page + (increase ? 1 : -1)).then((data) => {
      setProducts(data);
    });
  };

  return (
    <ShopLayout>
      <section>
        <ul className={styles["ShopDisplay"]}>
          {products.map((item, index) => {
            return (
              <li key={index}>
                <ShopItem
                  id={item.productId}
                  title={item.title}
                  price={item.price}
                  shopId={item.shopId}
                  quantity={item.quantity}
                  shopName={item.SHOP.shopName}
                />
              </li>
            );
          })}
        </ul>
      </section>
      <div
        className={styles["page_increase_decrease"]}
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
        }}
      >
        <button
          onClick={() => {
            pageChange(false);
          }}
        >
          <Image src={leftArrow} alt="left arrow" className={styles[""]} />
        </button>
        <span
          style={{
            color: "#7fb6ff",
          }}
        >
          {page}
        </span>
        <button
          onClick={() => {
            pageChange(true);
          }}
        >
          <Image src={rightArrow} alt="right arrow" className={styles[""]} />
        </button>
      </div>
    </ShopLayout>
  );
}
export default Home;
