import categoryReducer, {
  fetchCategories,
  createCategory,
  updateCategory,
  deleteCategory,
} from "../../redux/reducers/category";
import createStore from "../shared/mockStore";
import categoryServer from "../shared/caregoryServer";
import { Category, NewCategory } from "../../types/category";

let store = createStore();

beforeEach(() => {
  categoryServer.listen();
});

afterAll(() => {
  categoryServer.close();
});

describe("test category reducer", () => {
  //collection of all single test cases
  test("check initial state", () => {
    expect(store.getState().categoryReducer.length).toBe(0);
  });
  test("should return only first 5 categories from api", async () => {
    // redux can't work with async funct so we work with the store instead (but it's not normal mostly bcs testing store should be separated)
    await store.dispatch(fetchCategories());
    expect(store.getState().categoryReducer.length).toBe(5);
  });
  test("should create new category", async () => {
    const newCategory: NewCategory = {
      name: "test",
      image: "https://test",
    };
    await store.dispatch(createCategory(newCategory));
    expect(store.getState().categoryReducer.length).toBe(6);
  });
  test("should update edited category", async () => {
    await store.dispatch(fetchCategories());
    await store.dispatch(
      updateCategory({ id: 1, name: "test", image: "https://test" })
    );
    expect(store.getState().categoryReducer[0].name).toBe("test");
  });
  test("should delete category", async () => {
    const id = 1;
    await store.dispatch(deleteCategory(id));
    expect(store.getState().categoryReducer.length).toBe(5);
  });
});
