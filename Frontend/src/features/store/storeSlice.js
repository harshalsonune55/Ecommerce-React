import { createSlice, nanoid, createAsyncThunk } from '@reduxjs/toolkit';

const URL = "https://fakestoreapi.com/products";
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

  export const signupUser = createAsyncThunk(
    "auth/signupUser",
    async (formData, thunkAPI) => {
      try {
        const response = await fetch("http://localhost:8080/signup" ,{method:"Post",  headers: {
          "Content-Type": "application/json", 
        }, body:JSON.stringify(formData)});
        const data = await response.json();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.response?.data || "Signup failed");
      }
    }
  );
  export const loginUser = createAsyncThunk("auth/loginUser", async (formData, thunkAPI) => {
    try {
      const response = await fetch("http://localhost:8080/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) {
        const error = await response.json();
        return thunkAPI.rejectWithValue(error.message || "Login failed");
      }
      const data = await response.json();
      return data;
    } catch (err) {
      return thunkAPI.rejectWithValue("Invalid credentials");
    }
  });
  


  const authSlice = createSlice({
    name: "auth",
    initialState: {
      user: null,
      loading: false,
      error: null,
      success: false,
    },
    reducers: {
      resetAuthState: (state) => {
        state.loading = false;
        state.error = null;
        state.success = false;
      },
      logoutUser: (state) => {
        state.user = null;
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(signupUser.pending, (state) => {
          state.loading = true;
          state.error = null;
        })
        .addCase(signupUser.fulfilled, (state, action) => {
          state.loading = false;
          state.success = true;
          state.user = action.payload.user;
        })
        .addCase(signupUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        })
        .addCase(loginUser.pending, (state) => {
          state.loading = true;
        })
        .addCase(loginUser.fulfilled, (state, action) => {
          state.loading = false;
          state.user = action.payload;
        })
        .addCase(loginUser.rejected, (state, action) => {
          state.loading = false;
          state.error = action.payload;
        });
    },
  });





  const data=createSlice({
    name:"data",
    initialState:{
        isloding:false,
        data:null,
        isError:false,
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchData.pending,(state,action)=>{
            state.isloding=true;
        });
        builder.addCase(fetchData.fulfilled,(state,action)=>{
            state.isloding=false;
            state.data=action.payload;
        });
        builder.addCase(fetchData.rejected,(state,action)=>{
            console.log("error",action.payload);
            state.isError=true;
        });
    }
});

export const cartReducer = cartSlice.reducer;
export const authReducer = authSlice.reducer;
export const dataReducer = data.reducer;
export const { logoutUser } = authSlice.actions;
export const { addToCart, removeFromCart, viewitem } = cartSlice.actions;
export const { resetAuthState } = authSlice.actions;