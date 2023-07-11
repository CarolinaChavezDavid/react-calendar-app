import React, { useState } from 'react'
import { Calendar, dateFnsLocalizer } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { addHours } from 'date-fns';
import { localizer } from '../helper/CalendarLocalizer';
import { getMessagesES } from '../helper/getMessage';
import { CalendarEvent } from '../components/CalendarEvent';
import { CalendarModal } from '../components/CalendarModal';




const myEventsList = [{
    title: 'Pay phone bill',
    note: 'Cancel plan',
    start: new Date(),
    end: addHours( new Date(), 2 ),
    bgColor: '#fafafa',
    user: {
      _id: '123',
      name: 'Carolina'
    }
}]

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const style = {
      backgroundColor: '#CB6CE6',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }
  

 


export const CalendarPage = () => {

    const [ lastView, setLastView ] = useState(localStorage.getItem('lastView') || 'week' );


    const onDoubleClick = ( event ) => {
        // console.log({ doubleClick: event });
        openDateModal();
      }
    
      const onSelect = ( event ) => {
        // console.log({ click: event });
        setActiveEvent( event );
      }
    
      const onViewChanged = ( event ) => {
        localStorage.setItem('lastView', event );
        setLastView( event )
      }

    return (
        <>
            <Calendar
            localizer={localizer}
            events={myEventsList}
            startAccessor="start"
            endAccessor="end"
            style={{ height: 'calc( 100vh - 80px )' }}
            messages={ getMessagesES() }
            eventPropGetter={ eventStyleGetter }
            components={{
                event: CalendarEvent
            }}
            onDoubleClickEvent={ onDoubleClick }
            onSelectEvent={ onSelect }
            onView={ onViewChanged }

            />

            <CalendarModal />
        </>
       
           
        
      )
}
