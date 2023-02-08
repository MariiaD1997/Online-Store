import createStore from "../shared/mockStore";
import categoryServer from "../shared/caregoryServer";
import productsReducer, {
  fetchProducts,
  fetchSingleProduct,
  createProduct,
  updateOne,
  deleteOne,
} from "../../redux/reducers/products";

let store = createStore();

beforeEach(() => {
  categoryServer.listen();
});

afterAll(() => {
  categoryServer.close();
});
