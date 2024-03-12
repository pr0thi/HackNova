import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice({
    name:'cart', 
    initialState:{
        items:[]
    }, 

    reducers:{
        addItem:(state, action) =>{
            //mutating the state over here -> Directly modify 
            state.items.push(action.payload);
        }, 
        removeItem:(state) =>{
            //action not in use
            state.items.pop();
        }, 
        clearCart:(state)=>{
            state.items.length = 0;
            //suppose 10 items in cart -> It'll make it zero []
        }, 
        addCost:(state, action)=>{
            state.price.push(action.payload);
        }, 
        clearPrice:(state)=>{
            state.price.length = 0;

        }
    }
});

export const {addItem, removeItem, clearCart, addCost, clearPrice} = cartSlice.actions;

export default cartSlice.reducer;