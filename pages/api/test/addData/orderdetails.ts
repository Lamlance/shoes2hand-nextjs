import { myPrismaClient } from "../../../../helper/prismaClient";
import type { NextApiRequest, NextApiResponse } from "next";

const orderdetailData = [
  {
    orderdetailId: 1,
    productId: 18,
    orderId: 26,
    quantity: 8,
  },
  {
    orderdetailId: 2,
    productId: 11,
    orderId: 41,
    quantity: 8,
  },
  {
    orderdetailId: 3,
    productId: 2,
    orderId: 29,
    quantity: 4,
  },
  {
    orderdetailId: 4,
    productId: 12,
    orderId: 11,
    quantity: 2,
  },
  {
    orderdetailId: 5,
    productId: 5,
    orderId: 18,
    quantity: 10,
  },
  {
    orderdetailId: 6,
    productId: 5,
    orderId: 31,
    quantity: 6,
  },
  {
    orderdetailId: 7,
    productId: 15,
    orderId: 26,
    quantity: 3,
  },
  {
    orderdetailId: 8,
    productId: 18,
    orderId: 45,
    quantity: 7,
  },
  {
    orderdetailId: 9,
    productId: 16,
    orderId: 20,
    quantity: 2,
  },
  {
    orderdetailId: 10,
    productId: 5,
    orderId: 32,
    quantity: 2,
  },
  {
    orderdetailId: 11,
    productId: 5,
    orderId: 21,
    quantity: 7,
  },
  {
    orderdetailId: 12,
    productId: 8,
    orderId: 39,
    quantity: 3,
  },
  {
    orderdetailId: 13,
    productId: 18,
    orderId: 24,
    quantity: 5,
  },
  {
    orderdetailId: 14,
    productId: 13,
    orderId: 11,
    quantity: 1,
  },
  {
    orderdetailId: 15,
    productId: 16,
    orderId: 19,
    quantity: 6,
  },
  {
    orderdetailId: 16,
    productId: 5,
    orderId: 17,
    quantity: 1,
  },
  {
    orderdetailId: 17,
    productId: 2,
    orderId: 45,
    quantity: 5,
  },
  {
    orderdetailId: 18,
    productId: 1,
    orderId: 9,
    quantity: 2,
  },
  {
    orderdetailId: 19,
    productId: 3,
    orderId: 4,
    quantity: 6,
  },
  {
    orderdetailId: 20,
    productId: 20,
    orderId: 31,
    quantity: 8,
  },
  {
    orderdetailId: 21,
    productId: 4,
    orderId: 22,
    quantity: 1,
  },
  {
    orderdetailId: 22,
    productId: 6,
    orderId: 6,
    quantity: 8,
  },
  {
    orderdetailId: 23,
    productId: 16,
    orderId: 41,
    quantity: 2,
  },
  {
    orderdetailId: 24,
    productId: 13,
    orderId: 16,
    quantity: 7,
  },
  {
    orderdetailId: 25,
    productId: 15,
    orderId: 16,
    quantity: 7,
  },
  {
    orderdetailId: 26,
    productId: 19,
    orderId: 11,
    quantity: 9,
  },
  {
    orderdetailId: 27,
    productId: 18,
    orderId: 11,
    quantity: 9,
  },
  {
    orderdetailId: 28,
    productId: 2,
    orderId: 25,
    quantity: 2,
  },
  {
    orderdetailId: 29,
    productId: 9,
    orderId: 24,
    quantity: 10,
  },
  {
    orderdetailId: 30,
    productId: 11,
    orderId: 29,
    quantity: 5,
  },
  {
    orderdetailId: 31,
    productId: 20,
    orderId: 23,
    quantity: 9,
  },
  {
    orderdetailId: 32,
    productId: 15,
    orderId: 3,
    quantity: 1,
  },
  {
    orderdetailId: 33,
    productId: 11,
    orderId: 26,
    quantity: 9,
  },
  {
    orderdetailId: 34,
    productId: 13,
    orderId: 5,
    quantity: 1,
  },
  {
    orderdetailId: 35,
    productId: 10,
    orderId: 47,
    quantity: 5,
  },
  {
    orderdetailId: 36,
    productId: 7,
    orderId: 30,
    quantity: 7,
  },
  {
    orderdetailId: 37,
    productId: 10,
    orderId: 33,
    quantity: 1,
  },
  {
    orderdetailId: 38,
    productId: 10,
    orderId: 46,
    quantity: 10,
  },
  {
    orderdetailId: 39,
    productId: 6,
    orderId: 41,
    quantity: 6,
  },
  {
    orderdetailId: 40,
    productId: 13,
    orderId: 13,
    quantity: 8,
  },
  {
    orderdetailId: 41,
    productId: 16,
    orderId: 18,
    quantity: 9,
  },
  {
    orderdetailId: 42,
    productId: 1,
    orderId: 8,
    quantity: 4,
  },
  {
    orderdetailId: 43,
    productId: 15,
    orderId: 21,
    quantity: 4,
  },
  {
    orderdetailId: 44,
    productId: 5,
    orderId: 17,
    quantity: 1,
  },
  {
    orderdetailId: 45,
    productId: 13,
    orderId: 13,
    quantity: 2,
  },
  {
    orderdetailId: 46,
    productId: 9,
    orderId: 33,
    quantity: 8,
  },
  {
    orderdetailId: 47,
    productId: 18,
    orderId: 12,
    quantity: 1,
  },
  {
    orderdetailId: 48,
    productId: 17,
    orderId: 38,
    quantity: 7,
  },
  {
    orderdetailId: 49,
    productId: 1,
    orderId: 44,
    quantity: 3,
  },
  {
    orderdetailId: 50,
    productId: 13,
    orderId: 21,
    quantity: 4,
  },
];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.query.password && req.query.password === "lam123") {
    await myPrismaClient.$connect();
    const addData = await myPrismaClient.oRDERDETAIL.createMany({
      data: orderdetailData,
      skipDuplicates: true,
    });
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
