import store from "../../redux/store";
import categoryReducer, {
  fetchCategories,
} from "../../redux/reducers/category";
import createStore from "../shared/testData";
import categoryServer from "../shared/caregoryServer";

beforeEach(() => {
  categoryServer.listen();
});

afterAll(() => {
  categoryServer.close();
});

describe("test country reducer", () => {
  //collection of all single test cases
  test("check initial state", () => {
    expect(store.getState().categoryReducer.length).toBe(0);
  });
  test("should return only first 5 categories from api", async () => {
    // redux can't work with async funct so we work with the store instead (but it's not normal mostly bcs testing store should be separated)
    await store.dispatch(fetchCategories());
    expect(store.getState().categoryReducer.length).toBe(5);
  });
});
