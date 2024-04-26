import { configureStore } from '@reduxjs/toolkit'
import todoslice from './Todos/todoslice'


export const makeStore = () => {
  return configureStore({
    reducer: {
        todoReducer : todoslice
    }
  })
}


export type AppStore = ReturnType<typeof makeStore>
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']