import { createSlice, Slice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AppState {
  currency: any
  loading: boolean
  storeConfig: any
}

const initialState: AppState = {
  currency: null,
  loading: false,
  storeConfig: null
}

export const slice: Slice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppConfig: (state: AppState, { payload = {} }) => {
      const { currency, storeConfig } = payload
      state.currency = currency
      state.storeConfig = storeConfig
    },
    setLoading: (state: AppState, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    }
  }
})
