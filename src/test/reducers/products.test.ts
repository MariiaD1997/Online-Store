import createStore from "../shared/mockStore";
import categoryServer from "../shared/caregoryServer";
import productsReducer, {
  fetchProducts,
  fetchSingleProduct,
  createProduct,
  updateOne,
  deleteOne,
} from "../../redux/reducers/products";
import productsServer from "../shared/productsServer";

let store = createStore();

beforeEach(() => {
  productsServer.listen();
});

afterAll(() => {
  productsServer.close();
});

describe("test category reducer", () => {
  //collection of all single test cases
  test("check initial state", () => {
    expect(store.getState().productsReducer.length).toBe(0);
  });
  test("should return all products from api", async () => {
    // redux can't work with async funct so we work with the store instead (but it's not normal mostly bcs testing store should be separated)
    await store.dispatch(fetchProducts());
    expect(store.getState().categoryReducer.length).toBeGreaterThan(0);
  });
});
