import { createNewUser, fetchUsers } from "../../redux/reducers/users";
import { createStore } from "../../redux/store";
import { UserLoginCredential } from "../../types/user";
import usersServer from "../shared/usersServer";

let store = createStore();

beforeEach(() => {
  usersServer.listen();
});

afterAll(() => {
  usersServer.close();
});

describe("test user reducer", () => {
  test("check initial state", () => {
    expect(store.getState().usersReducer).toBeNull;
  });
  test("should return all users from api", async () => {
    await store.dispatch(fetchUsers());
    expect(store.getState().usersReducer.users.length).toBe(5);
  });
  test("should add new user", async () => {
    const newUser: UserLoginCredential = {
      email: "test",
      password: "test",
      name: "test",
      avatar: "",
    };
    await store.dispatch(createNewUser(newUser));
    expect(store.getState().usersReducer.users.length).toBe(6);
  });
});
