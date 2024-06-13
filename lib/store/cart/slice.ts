import { createSlice, Slice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface CartState {
  cartId: any
  cartDetail: any
  loading: boolean
}

const initialState: CartState = {
  cartId: null,
  cartDetail: null,
  loading: false
}

export const slice: Slice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    setCartId: (state: CartState, { payload }) => {
      state.cartId = payload
    },
    setCartDetail: (state: CartState, { payload }) => {
      state.cartId = payload.id
      state.cartDetail = payload
      state.loading = false
    },
    setLoading: (state: CartState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setInitialState: () => initialState
  }
})
