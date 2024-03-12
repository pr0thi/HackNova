import { useDispatch, useSelector } from "react-redux";
import DonarInfoCard from "./DonarInfoCard";
import { clearCart, clearPrice } from "./utils/cartSlice";

const Cart = () =>{

    const cartItems = useSelector((store)=> store.cart.items);
    console.log(cartItems);
    const dispatch = useDispatch();

    const handleClear = () =>{
        dispatch(clearCart());
        dispatch(clearPrice());
    }


    return <div className="text-center m-4 p-4">
    <h1 className="text-2xl font-bold">Cart</h1>
    
    </div>
}

export default Cart;