import { createSlice, configureStore, PayloadAction } from '@reduxjs/toolkit'
import {FirmModel, GetDefaultFirmModel} from './models/FirmModel'

const sellerSlice = createSlice({
  name: 'seller',
  initialState: { value : GetDefaultFirmModel() },
  reducers: {
    setFirm: (state, action:PayloadAction<Partial<FirmModel>>) => {
      state.value = {...state.value, ...action.payload};
    }
  }
})

const buyerSlice = createSlice({
    name: 'buyer',
    initialState: { value : GetDefaultFirmModel() },
    reducers: {
      setFirm: (state, action:PayloadAction<Partial<FirmModel>>) => {
        state.value = {...state.value, ...action.payload};
      }
    }
  })

export const { setFirm: setSeller } = sellerSlice.actions
export const { setFirm: setBuyer } = sellerSlice.actions

export const store = configureStore({
  reducer: {
    seller: sellerSlice.reducer,
    buyer: buyerSlice.reducer
  }
})

export type RootState = ReturnType<typeof store.getState>