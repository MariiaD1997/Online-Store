import { createStore } from "../../redux/store";
import cartReducer, {
  addItemToCart,
  deleteFromCart,
} from "../../redux/reducers/cart";
import { CartProps } from "../../types/cart";

let store = createStore();
beforeEach(() => {
  store = createStore();
});

describe("test cart reducer", () => {
  test("cart initial value", () => {
    expect(store.getState().cartReducer.length).toBe(0);
  });
  test("add item to cart", () => {
    const newProduct: CartProps = {
      id: 4,
      title: "Test product",
      price: 345,
      image: "",
      quantity: 1,
    };
    store.dispatch(addItemToCart(newProduct));
    expect(store.getState().cartReducer.length).toBe(1);
  });
  test("remove item from cart", () => {
    store.dispatch(deleteFromCart(4));
    expect(store.getState().cartReducer.length).toBe(0);
  });
  test("add one item few times in cart", () => {
    const newProduct: CartProps = {
      id: 4,
      title: "Test product",
      price: 345,
      image: "",
      quantity: 1,
    };
    store.dispatch(addItemToCart(newProduct));
    store.dispatch(addItemToCart(newProduct));
    store.dispatch(addItemToCart(newProduct));
    expect(store.getState().cartReducer.length).toBe(1);
    expect(store.getState().cartReducer[0].quantity).toBe(3);
  });
});
