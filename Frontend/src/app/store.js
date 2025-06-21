import { configureStore } from '@reduxjs/toolkit';
import { datareducer } from '../features/store/storeSlice';
import cartReducer from '../features/store/storeSlice'; 

const Store = configureStore({
    reducer: {
     data:datareducer,
     cart: cartReducer
  }
  });

export default Store;