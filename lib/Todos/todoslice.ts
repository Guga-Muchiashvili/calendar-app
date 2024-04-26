import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



const initialState = { 
    todos : []
} as any

const TodoSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    setTodos : (state, action) => {
        state.todos = [action.payload]
    }
  },
})

export const { setTodos } = TodoSlice.actions
export default TodoSlice.reducer