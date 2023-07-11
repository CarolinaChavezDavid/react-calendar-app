import { useDispatch, useSelector } from "react-redux";
import { onCloseDateModal, onOpenDateModal } from "../calendar/store/ModalSlice";


export const useCalendarUI = () => {

    const dispatch = useDispatch();

    const { isDateModalOpen } = useSelector( state => state.modal );

    const openDateModal = () => {
        dispatch( onOpenDateModal() )
    }

    const closeDateModal = () => {
        dispatch( onCloseDateModal() )
    }

    const toggleDateModal = () => {
        (isDateModalOpen)
            ? openDateModal()
            : closeDateModal();
    }



    return {
        isDateModalOpen,
        closeDateModal,
        openDateModal,
        toggleDateModal,
    }
}