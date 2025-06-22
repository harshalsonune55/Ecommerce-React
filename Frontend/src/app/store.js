import { configureStore } from '@reduxjs/toolkit';
import { dataReducer } from '../features/store/storeSlice';
import {cartReducer,authReducer} from '../features/store/storeSlice'; 



const Store = configureStore({
    reducer: {
     data: dataReducer,
     cart: cartReducer,
     auth: authReducer,
  }
  });

export default Store;