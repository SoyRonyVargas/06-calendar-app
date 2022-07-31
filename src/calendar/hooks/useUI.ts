import { useAppSelector, useAppDispatch } from './../../hooks/index';
import { selectIsModelOpen } from './../../store/ui/selectors';
import { showModal , hideModal } from '../../store';
import useCalendarStore from './useCalendarStore';

const useUI = () => {

    const dispatch = useAppDispatch()

    const isModalOpen = useAppSelector(selectIsModelOpen)

    const { handleCleanEvent , isLoadingModal } = useCalendarStore()

    const handleShowModal = () => {

        dispatch(showModal())

    }

    const handleHideModal = () => {
        
        dispatch(hideModal())

        handleCleanEvent()

    }

    return {
        isModalOpen,
        isLoadingModal,
        handleHideModal,
        handleShowModal,
    }

}
export default useUI