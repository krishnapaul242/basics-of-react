import {
  configureStore,
  combineReducers,
} from "@reduxjs/toolkit";
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import { counterReducer } from "./redux/counterSlice";
import { cartReducer } from "./redux/cartSlice";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: 'root',
  storage: storage,
}

const rootReducer = combineReducers({
  counter: counterReducer,
  cart: cartReducer
})

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

export const persistor = persistStore(store)
