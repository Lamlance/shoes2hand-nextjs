import { useEffect, useRef, useState } from "react";
import { addCartItem, ItemDisplayInfo } from "../../helper/CartStore";
import ShopLayout from "../../components/layouts/ShopLayout";
import styles from "../../styles/ProductDetail.module.scss";
import { useRouter } from "next/router";
import { ProductGetRespond } from "../api/products";
import Image from "next/image";
import shoes from "../../public/test-shoe.png";
import addToCart from "../../public/icons8-buy-24.png";
import Link from "next/link";

const ProductDetail = () => {
  const productNumerInput = useRef<HTMLInputElement>(null);
  const [productAmount, setProductAmount] = useState(0);
  const [fetchedData, setFetchedData] = useState<
    ProductGetRespond | null | undefined
  >(undefined);
  const router = useRouter();

  useEffect(() => {
    console.log(router);
    fetch(`/api/products?productId=${router.query.productId}`).then((fdata) => {
      try {
        fdata.json().then((product) => {
          setFetchedData(product);
        });
      } catch (error) {
        console.log(error);
        setFetchedData(null);
      }
    });
  }, []);

  if (fetchedData === undefined) {
    return (
      <ShopLayout>
        <h1>Data is fetching</h1>
      </ShopLayout>
    );
  }

  if (fetchedData === null) {
    return (
      <ShopLayout>
        <h1>Product data not found</h1>
      </ShopLayout>
    );
  }

  const maxProduct = fetchedData.quantity <= 20 ? fetchedData.quantity : 20;

  function changeProductAmountHandler(increaseFlag: boolean = true) {
    const dataChange = productAmount + (increaseFlag ? 1 : -1);

    if (dataChange <= maxProduct && dataChange >= 0) {
      setProductAmount(dataChange);
    }
  }

  function addToCartHandler() {
    if (!fetchedData) {
      return;
    }
    addCartItem(
      fetchedData.shopId,
      fetchedData.SHOP.shopName,
      {
        id: fetchedData.productId,
        title: fetchedData.title,
        quantity: productAmount,
        price: fetchedData.price,
      },
      true
    );
  }

  return (
    <ShopLayout>
      <div className={styles["s2h_product_detail_wrapper"]}>
        <div className={styles["s2h_product_briefing"]}>
          <div className={styles["s2h_product_image"]}>
            <Image src={shoes} alt="shoe" />
            {/* <Image src={shoes} alt="shoe" />
            <Image src={shoes} alt="shoe" />
            <Image src={shoes} alt="shoe" /> */}
            {/* <img alt="Image 1"></img>
            <img alt="Image 1"></img>
            <img alt="Image 1"></img>
            <img alt="Image 1"></img> */}
          </div>
          <section className={styles["s2h_product_briefing_info"]}>
            <h1>{fetchedData.title}</h1>
            <h1>
              Giá{" "}
              {fetchedData.price.toLocaleString("en-uk", { currency: "vnd" })}{" "}
              VND
            </h1>
            <div className={styles["s2h_product_breifing_add"]}>
              <h3>Số lượng</h3>
              <button
                onClick={() => {
                  changeProductAmountHandler(false);
                }}
              >
                {"🔽"}
              </button>
              <input
                ref={productNumerInput}
                type="number"
                min={0}
                max={maxProduct}
                value={productAmount}
              ></input>
              <button
                onClick={() => {
                  changeProductAmountHandler(true);
                }}
              >
                {"🔼"}
              </button>
            </div>
            <div className={styles["s2h_action_bnt"]}>
              <button
                onClick={() => {
                  addToCartHandler();
                }}
                className={styles["addCart"]}
              >
                <p>Add to cart</p>
                <Image
                  className={styles["add_to_cart"]}
                  src={addToCart}
                  alt="addToCart"
                  width={22}
                  height={22}
                />
              </button>
              <button>Buy now</button>
            </div>
          </section>
        </div>
        <hr style={{ margin: "1rem 0" }}></hr>
        <h3>Thông tin sản phẩm</h3>
        <section className={styles["s2h_product_info"]}>
          <h4>Tên shop: </h4>
          <p>{fetchedData.SHOP.shopName}</p>
          <h4>Số lượng: </h4>
          <p>{fetchedData.quantity}</p>
          <h4>Thông tin chi tiết sản phẩm: </h4>
          <p>{fetchedData.description}</p>
        </section>
      </div>
    </ShopLayout>
  );
}
export default ProductDetail;
