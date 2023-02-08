import { rest } from "msw";
import { setupServer } from "msw/node";

import { Category } from "../../types/category";
import testData from "./testData";

export const handler = [
  // add new catgory
  rest.post(
    "https://api.escuelajs.co/api/v1/categories/",
    async (req, res, ctx) => {
      const category: Category = await req.json();
      return res(ctx.json(category));
    }
  ),

  //get all categories
  rest.get(
    "https://api.escuelajs.co/api/v1/categories?offset=0&limit=5",
    async (req, res, ctx) => {
      return res(ctx.json(testData.allCategories));
    }
  ),
  //update category
  rest.put(
    `https://api.escuelajs.co/api/v1/categories/${id}`,
    async (req, res, ctx) => {
      const category: Category = await req.json();
      return res(ctx.json(category));
    }
  ),

  //delete category
];

const categoryServer = setupServer(...handler);
export default categoryServer;
