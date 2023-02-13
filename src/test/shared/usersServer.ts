import { rest } from "msw";
import { setupServer } from "msw/node";
import { UserLoginCredential } from "../../types/user";

import testData from "./testData";

export const handler = [
  //get all users
  rest.get("https://api.escuelajs.co/api/v1/users", async (req, res, ctx) => {
    return res(ctx.json(testData.allUsers));
  }),

  //add new user
  rest.post("https://api.escuelajs.co/api/v1/users/", async (req, res, ctx) => {
    const user: UserLoginCredential = await req.json();
    testData.allUsers.push({ ...user, role: "customer", id: 6 });
    return res(ctx.json({ ...user, role: "customer", id: 6 }));
  }),

  //authenticate
  rest.post(
    "https://api.escuelajs.co/api/v1/auth/login",
    async (req, res, ctx) => {
      const { email, password } = await req.json();

      if (email === "test" && password === "test") {
        return res(ctx.json(testData.authToken.access_token));
      }
    }
  ),
];

const usersServer = setupServer(...handler);
export default usersServer;
