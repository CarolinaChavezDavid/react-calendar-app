import { createSlice } from '@reduxjs/toolkit'
import { addHours } from 'date-fns'

const initialEvent =  {
    title: 'Pay phone bill',
    note: 'Cancel plan',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Carolina'
    }
}

export const calendarSlice = createSlice({
    name: 'calendar',
    initialState: {
        events: [initialEvent],
        activeEvent: null
    },
    reducers: {

    
        onAddNewEvent: ( state, { payload }) => {
            state.events.push(payload)
        },
        onUpdateEvent: (state, { payload }) => {
            state.events.map( event => {
                if(event.user._id  === payload._id) {
                    return payload
                }
                return event
            }) 
        },
        onDeleteEvent: (state) => {
            if ( state.activeEvent ) {
                state.events = state.events.filter( event => event._id !== state.activeEvent._id );
                state.activeEvent = null;
            }
        },

        onSetActiveEvent: ( state, { payload }) => {
            state.activeEvent = payload
        },
}
})

export const { onSetActiveEvent, onAddNewEvent, onUpdateEvent, onDeleteEvent } = calendarSlice.actions

export default calendarSlice.reducer