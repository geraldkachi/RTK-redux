import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { todosSlice } from '../features/todos/todosSlice';
import counterReducer from '../features/counter/counterSlice';
import { cryptoApi } from '../services/cryptoApi';
import { cryptoNewsApi } from '../services/cryptoNewsApi';
import { usersApi } from '../services/users';



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    [cryptoApi.reducerPath]: cryptoApi.reducer,
    [cryptoNewsApi.reducerPath]: cryptoNewsApi.reducer,

    [usersApi.reducerPath]: usersApi.reducer,

    [todosSlice.reducerPath]: todosSlice.reducer
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat([usersApi.middleware, todosSlice.middleware])
});

setupListeners(store.dispatch)

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
