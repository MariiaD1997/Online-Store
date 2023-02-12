import { createStore } from "../../redux/store";
import categoryServer from "../shared/caregoryServer";
import productsReducer, {
  fetchProducts,
  fetchSingleProduct,
  createProduct,
  updateOne,
  deleteOne,
} from "../../redux/reducers/products";
import productsServer from "../shared/productsServer";
import { CreateProduct, Product, UpdateProduct } from "../../types/products";

let store = createStore();

beforeEach(() => {
  productsServer.listen();
});

afterAll(() => {
  productsServer.close();
});

describe("test products reducer", () => {
  //collection of all single test cases
  test("check initial state", () => {
    expect(store.getState().productsReducer.length).toBe(0);
  });
  test("should return all products from api", async () => {
    // redux can't work with async funct so we work with the store instead (but it's not normal mostly bcs testing store should be separated)
    await store.dispatch(fetchProducts());
    expect(store.getState().productsReducer.length).toBe(4);
  });
  test("should create new product", async () => {
    const newProduct: CreateProduct = {
      title: "test",
      images: [
        "https://images.pexels.com/photos/14678486/pexels-photo-14678486.jpeg",
      ],
      price: 234,
      description: "cglvhvulg;ijj'",
      categoryId: 1,
    };
    await store.dispatch(createProduct(newProduct));
    expect(store.getState().productsReducer.length).toBe(5);
  });
  test("should update edited product", async () => {
    const editedProduct: UpdateProduct = {
      id: 40,
      editedData: {
        title: "Test edit title",
        price: 22222,
        description: "The Football Is Good For Training",
        images: ["https://api.lorem.space/image/fashion?w=640&h=480&r=2693"],
      },
    };
    await store.dispatch(fetchProducts());
    await store.dispatch(updateOne(editedProduct));
    expect(store.getState().productsReducer[0].title).toBe("Test edit title");
    expect(store.getState().productsReducer[0].price).toBe(22222);
  });
  test("should delete product", async () => {
    const id = 1;
    await store.dispatch(deleteOne(id));
    expect(store.getState().productsReducer.length).toBe(4);
  });
});
