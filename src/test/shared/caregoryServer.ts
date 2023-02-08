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
    `https://api.escuelajs.co/api/v1/categories/:id`,
    async (req, res, ctx) => {
      const updateCategory: Category = await req.json();
      const { id } = req.params;
      const foundCategory = testData.allCategories.find(
        (item) => item.id === Number(id)
      );
      if (foundCategory) {
        return res(
          ctx.json({
            ...foundCategory,
            ...updateCategory,
          })
        );
      }
    }
  ),

  //delete category
  rest.delete(
    `https://api.escuelajs.co/api/v1/categories/:id`,
    async (req, res, ctx) => {
      const { id } = await req.json();
      const deletedCategory = testData.allCategories.find(
        (item) => item.id === Number(id)
      );
      if (deletedCategory) {
        return res(ctx.json(true));
      }
    }
  ),
];

const categoryServer = setupServer(...handler);
export default categoryServer;
