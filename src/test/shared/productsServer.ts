import { rest } from "msw";
import { setupServer } from "msw/node";
import { CreateProduct, Product, UpdateProduct } from "../../types/products";

import testData from "./testData";

export const handler = [
  // add new product
  rest.post(
    "https://api.escuelajs.co/api/v1/products",
    async (req, res, ctx) => {
      const product: CreateProduct = await req.json();
      return res(ctx.json(product));
    }
  ),

  //get all products
  rest.get(
    "https://api.escuelajs.co/api/v1/products",
    async (req, res, ctx) => {
      return res(ctx.json(testData.allProducts));
    }
  ),
  /*
  // get single product
  rest.get(
    "https://api.escuelajs.co/api/v1/products/:id",
    async (req, res, ctx) => {
      return res(ctx.json(testData.allProducts));
    }
  ),
*/
  //update product
  rest.put(
    `https://api.escuelajs.co/api/v1/products/:id`,
    async (req, res, ctx) => {
      const updateProduct: UpdateProduct = await req.json();
      const { id } = req.params;
      const foundProduct = testData.allProducts.find(
        (item) => item.id === Number(id)
      );
      if (foundProduct) {
        return res(
          ctx.json({
            ...foundProduct,
            ...updateProduct,
          })
        );
      }
    }
  ),

  //delete product
  rest.delete(
    `https://api.escuelajs.co/api/v1/products/:id`,
    async (req, res, ctx) => {
      const { id } = await req.json();
      const deletedProduct = testData.allProducts.find(
        (item) => item.id === Number(id)
      );
      if (deletedProduct) {
        return res(ctx.json(true));
      }
    }
  ),
];

const productsServer = setupServer(...handler);
export default productsServer;
