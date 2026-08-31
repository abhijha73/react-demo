import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, resetCart } from "./../redux/cartSlice";
const Cart = () => {
  const cart = useSelector((state) => state.cart.items);
  console.log("cart is: ", cart);
  const dispatch = useDispatch();

  const removeItemsFromCart = () => {
    dispatch(removeFromCart());
  };

  return (
    <div>
      <div className="my-2 flex justify-between">
        <div>{cart.length} items</div>
        <button onClick={() => dispatch(resetCart())}>Clear Cart</button>
      </div>
      {cart &&
        cart.map((item) => (
          <div
            className="mt-4 flex items-center justify-between gap-4 border-t border-gray-200 pt-4"
            key={item.name}
          >
            <div className="min-w-0">
              <div className="flex items-center gap-2 font-semibold text-gray-900">
                <span
                  className={`h-3 w-3 shrink-0 rounded-full border-2 ${
                    item.isVeg
                      ? "border-green-600 bg-green-500"
                      : "border-red-600 bg-red-500"
                  }`}
                  aria-label={item.isVeg ? "Vegetarian" : "Non-vegetarian"}
                />
                <span>{item.name}</span>
              </div>
              {item.description && (
                <p className="mt-1 text-sm text-gray-500">{item.description}</p>
              )}
              <p className="mt-2 font-medium text-gray-800">₹{item.price}</p>
            </div>
            <button
              onClick={() => removeItemsFromCart()}
              type="button"
              className="shrink-0 rounded-lg border border-primary bg-white px-4 py-2 text-sm font-bold text-primary shadow-sm transition hover:bg-primary hover:text-white"
            >
              Remove
            </button>
          </div>
        ))}
    </div>
  );
};

export default Cart;
