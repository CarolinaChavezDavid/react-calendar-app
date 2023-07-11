import { createSlice } from '@reduxjs/toolkit'

export const modalSlice = createSlice({
    name: 'modal',
    initialState: {
        isDateModalOpen: false
    },
    reducers: {
        onOpenDateModal: ( state ) => {
            state.isDateModalOpen = true;
        },
        onCloseDateModal: ( state ) => {
            state.isDateModalOpen = false;
        },
  }
})

// Action creators are generated for each case reducer function
export const { onOpenDateModal, onCloseDateModal } = modalSlice.actions

export default modalSlice.reducer