import React, { useEffect, useMemo, useState } from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';
import './modal.css'
import { addHours, differenceInSeconds } from 'date-fns';
import { useCalendarStore } from '../../hooks/UseCalendarStore';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'sweetalert2/dist/sweetalert2.min.css';
import { useCalendarUI } from '../../hooks/useCalendarUI';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export const CalendarModal = () => {

    const { isDateModalOpen, closeDateModal } = useCalendarUI();

    const [ formSubmitted, setFormSubmitted ] = useState(false);

    const { activeEvent, startSavingEvent } = useCalendarStore();

    const [formValues, setFormValues] = useState({
        title: '',
        notes: '',
        start: new Date(),
        end: addHours( new Date(), 2),
    });

    const titleClass = useMemo(() => {
        if ( !formSubmitted ) return '';

        return ( formValues.title.length > 0 )
            ? ''
            : 'is-invalid';

    }, [ formValues.title, formSubmitted ])

    useEffect(() => {
      if ( activeEvent !== null ) {
          setFormValues({ ...activeEvent });
      }    
      
    }, [ activeEvent ])

    const onDateChanged = ( event, changing ) => {
        setFormValues({
            ...formValues,
            [changing]: event
        })
    }

    const onCloseModal = () => {
        closeDateModal();
    }

    const onSubmit = async( event ) => {
        event.preventDefault();
        setFormSubmitted(true);

    
        const difference = differenceInSeconds( formValues.end, formValues.start );
        
        if ( isNaN( difference ) || difference <= 0 ) {
            Swal.fire('Wrong dates','Check the register dates','error');
            return;
        }
        
        if ( formValues.title.length <= 0 ) return;
        
       
        await startSavingEvent( formValues );
        closeDateModal();
        setFormSubmitted(false);
    }
  
    const onInputChanged = ({ target }) => {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        })
    }

    return (
        <Modal
            isOpen={ isDateModalOpen }
            onRequestClose={ onCloseModal }
            style={ customStyles }
            className="modal"
            overlayClassName="modal-fondo"
            closeTimeoutMS={ 200 }
        >
            <h1> New Event </h1>
            <hr />
            <form className="container" onSubmit={ onSubmit }>
    
                <div className="form-group mb-2">
                    <label>Date time start</label>
                    <DatePicker 
                        selected={ formValues.start }
                        onChange={ (event) => onDateChanged(event, 'start') }
                        className="form-control"
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption="Hora"
                    />
                </div>
    
                <div className="form-group mb-2">
                    <label>Fecha y hora fin</label>
                    <DatePicker 
                        minDate={ formValues.start }
                        selected={ formValues.end }
                        onChange={ (event) => onDateChanged(event, 'end') }
                        className="form-control"
                        dateFormat="Pp"
                        showTimeSelect
                        locale="es"
                        timeCaption="Hora"
                    />
                </div>
    
                <hr />
                <div className="form-group mb-2">
                    <label>Titulo y notas</label>
                    <input 
                        type="text" 
                        className={ `form-control ${ titleClass }`}
                        placeholder="Título del evento"
                        name="title"
                        autoComplete="off"
                        value={ formValues.title }
                        onChange={ onInputChanged }
                    />
                    <small id="emailHelp" className="form-text text-muted">Short description</small>
                </div>
    
                <div className="form-group mb-2">
                    <textarea 
                        type="text" 
                        className="form-control"
                        placeholder="Notas"
                        rows="5"
                        name="notes"
                        value={ formValues.notes }
                        onChange={ onInputChanged }
                    ></textarea>
                    <small id="emailHelp" className="form-text text-muted">Additional Info</small>
                </div>
    
                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="far fa-save"></i>
                    <span>Save</span>
                </button>
    
            </form>
        </Modal>
      )
}
