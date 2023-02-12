import { createStore } from "../../redux/store";
import usersServer from "../shared/usersServer";

let store = createStore();

beforeEach(() => {
  usersServer.listen();
});

afterAll(() => {
  usersServer.close();
});
