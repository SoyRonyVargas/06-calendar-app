import { createSlice } from '@reduxjs/toolkit'

export interface UIState {
  showModal: boolean
  loader: boolean
}

const initialState: UIState = {
  showModal: false,
  loader: false
}

export const UISlice = createSlice({
  name: 'ui',
  initialState,
  reducers: {
    showModal: (state) => {
      state.showModal = true
    },
    hideModal: (state) => {
      state.showModal = false
    },
    showLoader: ( state ) => {
      state.loader = true
    },
    hideLoader: ( state ) => {
      state.loader = false
    }
  },
})

export const { showModal , hideModal, showLoader , hideLoader } = UISlice.actions

export default UISlice