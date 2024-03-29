import { myPrismaClient } from "../../../../helper/prismaClient";
import type { NextApiRequest, NextApiResponse } from "next";
//20 products
const productData: {
  productId: number;
  title: string;
  description: string;
  quantity: number;
  price: number;
  isHidden: boolean;
  rating: number;
  shopId: number;
  brandId: number;
}[] = [
  {
    productId: 1,
    title: "Cup - 8oz Coffee Perforated",
    description: "❤️ 💔 💌 💕 💞 💓 💗 💖 💘 💝 💟 💜 💛 💚 💙",
    quantity: 31,
    price: 25,
    isHidden: true,
    rating: 2.5,
    shopId: 12,
    brandId: 2,
  },
  {
    productId: 2,
    title: "Turkey - Breast, Boneless Sk On",
    description: "nil",
    quantity: 46,
    price: 27,
    isHidden: false,
    rating: 1.0,
    shopId: 7,
    brandId: 3,
  },
  {
    productId: 3,
    title: "Milk 2% 500 Ml",
    description: "1.00",
    quantity: 1,
    price: 12,
    isHidden: false,
    rating: 1.8,
    shopId: 17,
    brandId: 2,
  },
  {
    productId: 4,
    title: "Calypso - Black Cherry Lemonade",
    description: "¡™£¢∞§¶•ªº–≠",
    quantity: 48,
    price: 9,
    isHidden: false,
    rating: 0.7,
    shopId: 15,
    brandId: 1,
  },
  {
    productId: 5,
    title: "Cake Sheet Combo Party Pack",
    description: ",./;'[]\\-=",
    quantity: 22,
    price: 7,
    isHidden: false,
    rating: 0.8,
    shopId: 15,
    brandId: 2,
  },
  {
    productId: 6,
    title: "Beef - Inside Round",
    description: "¡™£¢∞§¶•ªº–≠",
    quantity: 24,
    price: 27,
    isHidden: true,
    rating: 3.4,
    shopId: 18,
    brandId: 0,
  },
  {
    productId: 7,
    title: "Coke - Classic, 355 Ml",
    description: "‪‪test‪",
    quantity: 32,
    price: 18,
    isHidden: true,
    rating: 1.3,
    shopId: 18,
    brandId: 0,
  },
  {
    productId: 8,
    title: "Wine - Muscadet Sur Lie",
    description: '"',
    quantity: 19,
    price: 41,
    isHidden: false,
    rating: 3.3,
    shopId: 5,
    brandId: 1,
  },
  {
    productId: 9,
    title: "Creamers - 10%",
    description: "¸˛Ç◊ı˜Â¯˘¿",
    quantity: 3,
    price: 2,
    isHidden: false,
    rating: 1.7,
    shopId: 4,
    brandId: 0,
  },
  {
    productId: 10,
    title: "Chocolate - Semi Sweet",
    description: "0️⃣ 1️⃣ 2️⃣ 3️⃣ 4️⃣ 5️⃣ 6️⃣ 7️⃣ 8️⃣ 9️⃣ 🔟",
    quantity: 41,
    price: 32,
    isHidden: true,
    rating: 2.3,
    shopId: 7,
    brandId: 2,
  },
  {
    productId: 11,
    title: "Water - Evian 355 Ml",
    description: "בְּרֵאשִׁית, בָּרָא אֱלֹהִים, אֵת הַשָּׁמַיִם, וְאֵת הָאָרֶץ",
    quantity: 12,
    price: 14,
    isHidden: true,
    rating: 0.9,
    shopId: 16,
    brandId: 2,
  },
  {
    productId: 12,
    title: "Soup - Verve - Chipotle Chicken",
    description: "0/0",
    quantity: 3,
    price: 7,
    isHidden: false,
    rating: 3.2,
    shopId: 17,
    brandId: 4,
  },
  {
    productId: 13,
    title: "Coffee Decaf Colombian",
    description: "😍",
    quantity: 9,
    price: 8,
    isHidden: true,
    rating: 1.0,
    shopId: 14,
    brandId: 1,
  },
  {
    productId: 14,
    title: "Croissant, Raw - Mini",
    description: "¸˛Ç◊ı˜Â¯˘¿",
    quantity: 34,
    price: 45,
    isHidden: false,
    rating: 2.0,
    shopId: 16,
    brandId: 3,
  },
  {
    productId: 15,
    title: "Juice - Orange, Concentrate",
    description: "null",
    quantity: 7,
    price: 31,
    isHidden: true,
    rating: 2.7,
    shopId: 17,
    brandId: 3,
  },
  {
    productId: 16,
    title: "Lamb Leg - Bone - In Nz",
    description: "Ω≈ç√∫˜µ≤≥÷",
    quantity: 45,
    price: 4,
    isHidden: true,
    rating: 1.8,
    shopId: 15,
    brandId: 2,
  },
  {
    productId: 17,
    title: "Cheese - Cambozola",
    description: "␡",
    quantity: 19,
    price: 28,
    isHidden: false,
    rating: 4.0,
    shopId: 10,
    brandId: 4,
  },
  {
    productId: 18,
    title: "Rootbeer",
    description: "‪‪test‪",
    quantity: 46,
    price: 50,
    isHidden: true,
    rating: 4.2,
    shopId: 11,
    brandId: 2,
  },
  {
    productId: 19,
    title: "Coffee - Egg Nog Capuccino",
    description: "✋🏿 💪🏿 👐🏿 🙌🏿 👏🏿 🙏🏿",
    quantity: 36,
    price: 40,
    isHidden: true,
    rating: 2.9,
    shopId: 13,
    brandId: 2,
  },
  {
    productId: 20,
    title: "Octopus - Baby, Cleaned",
    description: "1E+02",
    quantity: 10,
    price: 20,
    isHidden: true,
    rating: 0.6,
    shopId: 9,
    brandId: 0,
  },
];



export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.query.password && req.query.password === "lam123") {

    const littleDataProduct = [
      {
        productId: 1,
        title: "Cup - 8oz Coffee Perforated",
        description: "❤️ 💔 💌 💕 💞 💓 💗 💖 💘 💝 💟 💜 💛 💚 💙",
        quantity: 31,
        price: 25,
        isHidden: true,
        rating: 2.5,
        shopId: 2,
        brandId: 2,
      },
      {
        productId: 2,
        title: "Turkey - Breast, Boneless Sk On",
        description: "nil",
        quantity: 46,
        price: 27,
        isHidden: false,
        rating: 1.0,
        shopId: 4,
        brandId: 3,
      },
      {
        productId: 3,
        title: "Milk 2% 500 Ml",
        description: "1.00",
        quantity: 1,
        price: 12,
        isHidden: false,
        rating: 1.8,
        shopId: 6,
        brandId: 2,
      },
      {
        productId: 4,
        title: "Calypso - Black Cherry Lemonade",
        description: "¡™£¢∞§¶•ªº–≠",
        quantity: 48,
        price: 9,
        isHidden: false,
        rating: 0.7,
        shopId: 8,
        brandId: 1,
      },
      {
        productId: 10,
        title: "Juice - Orange, Concentrate",
        description: "null",
        quantity: 7,
        price: 31,
        isHidden: true,
        rating: 2.7,
        shopId: 10,
        brandId: 3,
      },
      {
        productId: 5,
        title: "Cake Sheet Combo Party Pack",
        description: ",./;'[]\\-=",
        quantity: 22,
        price: 7,
        isHidden: false,
        rating: 0.8,
        shopId: 1,
        brandId: 2,
      },
      {
        productId: 6,
        title: "Beef - Inside Round",
        description: "¡™£¢∞§¶•ªº–≠",
        quantity: 24,
        price: 27,
        isHidden: true,
        rating: 3.4,
        shopId: 3,
        brandId: 0,
      },
      {
        productId: 7,
        title: "Coke - Classic, 355 Ml",
        description: "‪‪test‪",
        quantity: 32,
        price: 18,
        isHidden: true,
        rating: 1.3,
        shopId: 5,
        brandId: 0,
      },
      {
        productId: 8,
        title: "Wine - Muscadet Sur Lie",
        description: '"',
        quantity: 19,
        price: 41,
        isHidden: false,
        rating: 3.3,
        shopId: 8,
        brandId: 1,
      },
      {
        productId: 9,
        title: "Creamers - 10%",
        description: "¸˛Ç◊ı˜Â¯˘¿",
        quantity: 3,
        price: 2,
        isHidden: false,
        rating: 1.7,
        shopId: 10,
        brandId: 0,
      }
    ]


    await myPrismaClient.$connect();
    const addData = await myPrismaClient.pRODUCT.createMany({
      data: littleDataProduct,
      skipDuplicates: true,
    });
    myPrismaClient.$disconnect();
    res.status(200).json({
      addCount: addData.count,
    });
    return;
  }
  res.status(200).json({
    addCount: 0,
    error: "Wrong params",
  });
}
