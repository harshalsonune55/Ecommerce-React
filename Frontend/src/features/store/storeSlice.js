import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';

const URL = "https://api.escuelajs.co/api/v1/products";
export const fetchData=createAsyncThunk('fetchData',async ()=>{
const response =await fetch(URL);
return response.json();
});

const cartSlice = createSlice({
    name: "cart",
    initialState: {
      cartItems: [],
    },
    reducers: {
      addToCart: (state, action) => {
        const existingItem = state.cartItems.find(
          (item) => item.id === action.payload.id
        );
      
        if (existingItem) {
          existingItem.quantity += 1;
        } else {
          state.cartItems.push({ ...action.payload, quantity: 1 });
        }
      },
      removeFromCart: (state, action) => {
        const existingItem = state.cartItems.find(item => item.id === action.payload);
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          state.cartItems = state.cartItems.filter(item => item.id !== action.payload);
        }
      },
    }
  });

  const data=createSlice({
    name:"data",
    initialState:{
        islosding:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state,action)=>{
            state.islosding=true;
        });
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.islosding=false;
            state.data=action.payload;
        });
        builder.addCase(fetchData.rejected,(state,action)=>{
            console.log("error",action.payload);
            state.isError=true;
        });
    }
});

export const datareducer = data.reducer;
export const { addToCart,removeFromCart,viewitem } = cartSlice.actions;
export default cartSlice.reducer;