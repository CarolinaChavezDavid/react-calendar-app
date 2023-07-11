import { configureStore } from "@reduxjs/toolkit";
import { authSlice } from "../auth/store/AuthSlice";
import { calendarSlice } from "../calendar/store/CalendarSlice";
import { modalSlice } from "../calendar/store/ModalSlice";


export const store = configureStore({
    reducer:{
        auth : authSlice.reducer,
        calendar : calendarSlice.reducer,
        modal : modalSlice.reducer
    }
})